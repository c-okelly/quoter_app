import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

interface State {
  lineLength: string
  bendRadius: string
  bendLength: string
  bendStart: string
}

class App extends React.Component<{}, State> {
  mountRef = React.createRef<HTMLDivElement>()
  scene?: THREE.Scene
  camera?: THREE.PerspectiveCamera
  renderer?: THREE.WebGLRenderer
  line?: THREE.Mesh
  controls?: OrbitControls

  state: State = {
    lineLength: '20',
    bendRadius: '',
    bendLength: '',
    bendStart: '',
  }

  componentDidMount() {
    this.initThree()
  }
// TODO fix this
  // TODO: Need to have this as bend Radius, bend length, start point
  componentDidUpdate(prevState: State) {
    if (
      prevState.lineLength !== this.state.lineLength ||
      prevState.bendRadius !== this.state.bendRadius ||
      prevState.bendLength !== this.state.bendLength ||
      prevState.bendStart !== this.state.bendStart
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
    
    // Add 3D grid helper with 2-unit squares
    const gridHelper = new THREE.GridHelper(200, 100, 0x888888, 0xcccccc)
    this.scene.add(gridHelper)
    
    this.camera.position.set(20, 20, 20)
    this.camera.lookAt(0, 0, 0)
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
    const bendRadiusNum = parseFloat(this.state.bendRadius)
    const bendLengthNum = parseFloat(this.state.bendLength)
    const bendStartNum = parseFloat(this.state.bendStart)
    const points: THREE.Vector3[] = []
    const sheetWidth = 100 //Math.max(1, Math.abs(lineLengthNum) * 0.02) // 2% of length, minimum 1
    const sheetThickness = Math.max(0.2, Math.abs(lineLengthNum) * 0.002) // 0.2% of length, minimum 0.2

    // Validate bend
    const validBend =
      !isNaN(bendRadiusNum) &&
      !isNaN(bendLengthNum) &&
      !isNaN(bendStartNum) &&
      bendRadiusNum > 0 &&
      bendLengthNum > 0 &&
      bendStartNum >= 0 &&
      bendStartNum + bendLengthNum <= lineLengthNum

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
      const arcLen = bendLengthNum
      const angleRad = arcLen / bendRadiusNum
      const arcSegments = 320
      const arcStart = new THREE.Vector3(startX + bendStartNum, 0, 0)
      const sign = 1 // always bend upward for now
      const cx = arcStart.x
      const cy = arcStart.y
      for (let i = 0; i <= arcSegments; i++) {
        const t = i / arcSegments
        const theta = t * angleRad
        const x = cx + bendRadiusNum * Math.sin(theta)
        const y = cy + bendRadiusNum * (1 - Math.cos(theta)) * sign
        points.push(new THREE.Vector3(x, y, 0))
      }
      // 3. Straight segment after bend, in tangent direction
      if (bendStartNum + bendLengthNum < lineLengthNum) {
        const arcEnd = points[points.length - 1]
        // Tangent direction at end of arc
        const thetaEnd = angleRad
        const dx = Math.cos(thetaEnd)
        const dy = sign * Math.sin(thetaEnd)
        const remainingLen = lineLengthNum - (bendStartNum + bendLengthNum)
        const endX = arcEnd.x + remainingLen * dx
        const endY = arcEnd.y + remainingLen * dy
        points.push(new THREE.Vector3(endX, endY, 0))
      }
    } else {
      // Straight line
      points.push(new THREE.Vector3(startX, 0, 0), new THREE.Vector3(endX, 0, 0))
    }

    // Create a 3D sheet (ribbon) along the path
    if (this.line && this.scene) {
      this.scene.remove(this.line)
      this.line.geometry.dispose()
      // @ts-ignore
      this.line.material.dispose && this.line.material.dispose()
      this.line = undefined
    }
    const curve = new THREE.CatmullRomCurve3(points)
    const geometry = new THREE.TubeGeometry(curve, 320, sheetThickness, sheetWidth , false)
    const material = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide })
    this.line = new THREE.Mesh(geometry, material)
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
    // Bend radius: 2-100
    const bendRadius = Math.random() * (100 - 2) + 2
    // Bend length: 5-80% of line length
    const maxBendLen = lineLength * 0.8
    const bendLength = Math.random() * (maxBendLen - 5) + 5
    // Start: >5% and <(lineLength-bendLength-5) of length
    const minStart = lineLength * 0.05
    const maxStart = lineLength - bendLength - 5
    const bendStart = Math.max(minStart, Math.random() * (maxStart - minStart) + minStart)
    this.setState({
      lineLength: lineLength.toFixed(2),
      bendRadius: bendRadius.toFixed(2),
      bendLength: bendLength.toFixed(2),
      bendStart: bendStart.toFixed(2),
    })
  }

  render() {
    const { lineLength, bendRadius, bendLength, bendStart } = this.state
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2>3D Line Simulation</h2>
        <form style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24, justifyContent: 'center' }}>
          <div>
            <label>Line Length: <input type="number" name="lineLength" value={lineLength} onChange={this.handleInputChange} /></label>
          </div>
          <div>
            <label>Bend Radius: <input type="number" name="bendRadius" value={bendRadius} onChange={this.handleInputChange} /></label>
          </div>
          <div>
            <label>Bend Length: <input type="number" name="bendLength" value={bendLength} onChange={this.handleInputChange} /></label>
          </div>
          <div>
            <label>Bend Start: <input type="number" name="bendStart" value={bendStart} onChange={this.handleInputChange} /></label>
          </div>
        </form>
        <button onClick={this.setRandomValues} style={{ marginBottom: 24 }}>Randomize</button>
        <div ref={this.mountRef} />
      </div>
    )
  }
}

export default App
