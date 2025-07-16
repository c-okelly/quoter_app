import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

interface State {
  lineLength: string
  bendAngle: string
  bendStart: string
  bendStop: string
}

class App extends React.Component<{}, State> {
  mountRef = React.createRef<HTMLDivElement>()
  scene?: THREE.Scene
  camera?: THREE.PerspectiveCamera
  renderer?: THREE.WebGLRenderer
  line?: THREE.Line
  controls?: OrbitControls

  state: State = {
    lineLength: '20',
    bendAngle: '',
    bendStart: '',
    bendStop: '',
  }

  componentDidMount() {
    this.initThree()
  }

  componentDidUpdate(prevProps: {}, prevState: State) {
    if (
      prevState.lineLength !== this.state.lineLength ||
      prevState.bendAngle !== this.state.bendAngle ||
      prevState.bendStart !== this.state.bendStart ||
      prevState.bendStop !== this.state.bendStop
    ) {
      this.updateLine()
    }
  }

  componentWillUnmount() {
    if (this.renderer && this.mountRef.current) {
      this.mountRef.current.removeChild(this.renderer.domElement)
    }
  }

  initThree() {
    const width = 600
    const height = 400
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0xffffff)
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(width, height)
    if (this.mountRef.current) {
      this.mountRef.current.appendChild(this.renderer.domElement)
    }
    
    // Add OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    
    this.camera.position.z = 10
    this.createLine()
    this.animate()
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    this.controls?.update()
    this.renderer?.render(this.scene!, this.camera!)
  }

  createLine() {
    const lineLengthNum = parseFloat(this.state.lineLength)
    const bendAngleNum = parseFloat(this.state.bendAngle)
    const bendStartNum = parseFloat(this.state.bendStart)
    const bendStopNum = parseFloat(this.state.bendStop)
    const points: THREE.Vector3[] = []
    const lineWidth = Math.max(5, Math.abs(lineLengthNum) * 0.01)

    // Validate bend
    const validBend =
      !isNaN(bendAngleNum) &&
      !isNaN(bendStartNum) &&
      !isNaN(bendStopNum) &&
      bendStopNum > bendStartNum &&
      bendStartNum >= 0 &&
      bendStopNum <= lineLengthNum &&
      Math.abs(bendAngleNum) > 0

    const half = isNaN(lineLengthNum) ? 0 : lineLengthNum / 2
    const startX = -half
    const endX = half

    if (validBend) {
      // 1. Straight segment before bend
      const preBendLen = bendStartNum
      if (preBendLen > 0) {
        points.push(new THREE.Vector3(startX, 0, 0))
        points.push(new THREE.Vector3(startX + preBendLen, 0, 0))
      } else {
        points.push(new THREE.Vector3(startX, 0, 0))
      }
      // 2. Arc segment (bend)
      const arcLen = bendStopNum - bendStartNum
      const angleRad = (bendAngleNum * Math.PI) / 180
      const radius = arcLen / Math.abs(angleRad)
      const arcSegments = 320
      const arcStart = new THREE.Vector3(startX + bendStartNum, 0, 0)
      const sign = bendAngleNum >= 0 ? 1 : -1
      const cx = arcStart.x
      const cy = arcStart.y
      for (let i = 0; i <= arcSegments; i++) {
        const t = i / arcSegments
        const theta = t * angleRad
        const x = cx + radius * Math.sin(theta)
        const y = cy + radius * (1 - Math.cos(theta)) * sign
        points.push(new THREE.Vector3(x, y, 0))
      }
      // 3. Straight segment after bend, in tangent direction
      if (bendStopNum < lineLengthNum) {
        const arcEnd = points[points.length - 1]
        // Tangent direction at end of arc
        const thetaEnd = angleRad
        const dx = Math.cos(thetaEnd)
        const dy = sign * Math.sin(thetaEnd)
        const remainingLen = lineLengthNum - bendStopNum
        const endX = arcEnd.x + remainingLen * dx
        const endY = arcEnd.y + remainingLen * dy
        points.push(new THREE.Vector3(endX, endY, 0))
      }
    } else {
      // Straight line
      points.push(new THREE.Vector3(startX, 0, 0), new THREE.Vector3(endX, 0, 0))
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({ color: 0x808080, linewidth: lineWidth })
    this.line = new THREE.Line(geometry, material)
    this.scene?.add(this.line)
  }

  updateLine() {
    if (this.line && this.scene) {
      this.scene.remove(this.line)
      this.line.geometry.dispose()
      // @ts-ignore
      this.line.material.dispose && this.line.material.dispose()
      this.line = undefined
    }
    this.createLine()
    // Adjust camera zoom based on line length
    const lineLengthNum = parseFloat(this.state.lineLength)
    if (this.camera) {
      // Calculate a z distance that fits the line comfortably in view
      // Use a factor to ensure padding
      const minZ = 10
      const factor = 1.2
      const fitZ = isNaN(lineLengthNum) ? minZ : Math.max(minZ, (lineLengthNum * factor) / (2 * Math.tan((this.camera.fov * Math.PI) / 360)))
      this.camera.position.z = fitZ
      this.camera.updateProjectionMatrix()
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState({ [name]: value } as any)
  }

  setRandomValues = () => {
    // Length: 20-500
    const lineLength = Math.floor(Math.random() * (500 - 20 + 1)) + 20
    // Bend: 5-175 degrees, always positive
    const bendAngle = Math.random() * (175 - 5) + 5
    // Start: >5% and <90% of length
    const minStart = lineLength * 0.05
    const maxStart = lineLength * 0.9
    const bendStart = Math.random() * (maxStart - minStart) + minStart
    // Stop: >start and <95% of length
    const minStop = bendStart + 1 // ensure stop > start
    const maxStop = lineLength * 0.95
    const bendStop = Math.random() * (maxStop - minStop) + minStop
    this.setState({
      lineLength: lineLength.toFixed(2),
      bendAngle: bendAngle.toFixed(2),
      bendStart: bendStart.toFixed(2),
      bendStop: bendStop.toFixed(2),
    })
  }

  render() {
    const { lineLength, bendAngle, bendStart, bendStop } = this.state
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>3D Line Simulation</h2>
        <form style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24, justifyContent: 'center' }}>
          <div>
            <label>Line Length: <input type="number" name="lineLength" value={lineLength} onChange={this.handleInputChange} /></label>
          </div>
          <div>
            <label>Bend Angle (°): <input type="number" name="bendAngle" value={bendAngle} onChange={this.handleInputChange} /></label>
          </div>
          <div>
            <label>Bend Start: <input type="number" name="bendStart" value={bendStart} onChange={this.handleInputChange} /></label>
          </div>
          <div>
            <label>Bend Stop: <input type="number" name="bendStop" value={bendStop} onChange={this.handleInputChange} /></label>
          </div>
        </form>
        <button onClick={this.setRandomValues} style={{ marginBottom: 24 }}>Randomize</button>
        <div ref={this.mountRef} />
      </div>
    )
  }
}

export default App
