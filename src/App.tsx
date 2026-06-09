import './App.css'
import { useState, useMemo } from 'react'

import mePhoto from './assets/photos/me.png'
import logoFisioprime from './assets/logos/logo_fisioprime.png'
import logoUangcek from './assets/logos/logo_uangcek.png'
import logoKolamguard from './assets/logos/logo_kolamguard.png'

const files = [
  { name: 'profile.ts', icon: 'TS', color: '#3178c6' },
  { name: 'skills.yml', icon: 'YML', color: '#cb171e' },
  { name: 'projects.json', icon: '{}', color: '#cbcb41' },
  { name: 'experience.md', icon: 'MD', color: '#69a1f5' },
]

function App() {
  const [activeFile, setActiveFile] = useState('profile.ts')
  const [openFiles, setOpenFiles] = useState(['profile.ts', 'projects.json'])

  const handleOpenFile = (fileName: string) => {
    if (!openFiles.includes(fileName)) {
      setOpenFiles([...openFiles, fileName])
    }
    setActiveFile(fileName)
  }

  const handleCloseFile = (e: React.MouseEvent, fileName: string) => {
    e.stopPropagation()
    const newOpen = openFiles.filter((f) => f !== fileName)
    setOpenFiles(newOpen)
    if (activeFile === fileName) {
      setActiveFile(newOpen.length > 0 ? newOpen[newOpen.length - 1] : '')
    }
  }

  // Generate line numbers based on content approximation (hardcoded max for simplicity)
  const lines = useMemo(() => Array.from({ length: 45 }, (_, i) => i + 1), [])

  const renderProfileTs = () => (
    <>
      <div className="code-block">
        <span className="sy-ctrl">import</span> <span className="sy-punct">{'{'}</span> <span className="sy-type">Developer</span> <span className="sy-punct">{'}'}</span> <span className="sy-ctrl">from</span> <span className="sy-str">'@core/types'</span><span className="sy-punct">;</span>
      </div>
      
      <div className="code-block">
        <span className="sy-comment">// SYS_OP: GIDEON</span><br/>
        <span className="sy-comment">// STATUS: AVAILABLE_FOR_HIRE</span>
      </div>

      <div className="code-block">
        <span className="sy-ctrl">export const</span> <span className="sy-var">profile</span><span className="sy-punct">:</span> <span className="sy-type">Developer</span> <span className="sy-punct">= {'{'}</span>
        <span className="code-indent">
          <span className="sy-var">name</span><span className="sy-punct">:</span> <span className="sy-str">'Gideon Ginting'</span><span className="sy-punct">,</span>
        </span>
        <span className="code-indent">
          <span className="sy-var">fullName</span><span className="sy-punct">:</span> <span className="sy-str">'Gideon Christ Gilberio Ginting, S.Kom'</span><span className="sy-punct">,</span>
        </span>
        <span className="code-indent">
          <span className="sy-var">role</span><span className="sy-punct">:</span> <span className="sy-str">'Full-Stack Engineer • Database Engineer • DevOps • Technical Support'</span><span className="sy-punct">,</span>
        </span>
        <span className="code-indent">
          <span className="sy-var">location</span><span className="sy-punct">:</span> <span className="sy-str">'Medan, Indonesia'</span><span className="sy-punct">,</span>
        </span>
        <span className="code-indent">
          <span className="sy-var">summary</span><span className="sy-punct">:</span> <span className="sy-str">'Full‑stack engineer with a strong mobile focus. Building reliable products from bare-metal servers to polished mobile and web UI. Experienced in Flutter, Laravel, and Applied Machine Learning.'</span><span className="sy-punct">,</span>
        </span>
        <span className="code-indent">
          <span className="sy-var">contact</span><span className="sy-punct">: {'{'}</span>
          <span className="code-indent-2">
            <span className="sy-var">email</span><span className="sy-punct">:</span> <span className="sy-str">'<a href="mailto:gidlqaz@gmail.com">gidlqaz@gmail.com</a>'</span><span className="sy-punct">,</span>
          </span>
          <span className="code-indent-2">
            <span className="sy-var">github</span><span className="sy-punct">:</span> <span className="sy-str">'<a href="https://github.com/zfphantoms" target="_blank" rel="noreferrer">github.com/zfphantoms</a>'</span><span className="sy-punct">,</span>
          </span>
          <span className="code-indent-2">
            <span className="sy-var">linkedin</span><span className="sy-punct">:</span> <span className="sy-str">'<a href="https://www.linkedin.com/in/zfphantoms/" target="_blank" rel="noreferrer">linkedin.com/in/zfphantoms</a>'</span><span className="sy-punct">,</span>
          </span>
          <span className="code-indent">
          <span className="sy-punct">{'}'}</span>
          </span>
        </span>
        <span className="sy-punct">{'}'};</span>
      </div>

      <div className="code-block">
        <span className="sy-comment">/* </span><br/>
        <span className="sy-comment"> * Photo of Operator</span><br/>
        <span className="sy-comment"> */</span><br/>
        <span className="sy-func">displayImage</span><span className="sy-punct">(</span><span className="sy-str">'/assets/me.png'</span><span className="sy-punct">);</span>
      </div>

      <div className="image-preview">
        <img src={mePhoto} alt="Gideon Ginting" width={150} />
      </div>
    </>
  )

  const renderSkillsYml = () => (
    <>
      <div className="code-block">
        <span className="sy-comment"># Tech Stack & Skills Inventory</span>
      </div>

      <div className="code-block">
        <span className="sy-keyword">MOBILE_DEV:</span>
        <span className="code-indent"><span className="sy-punct">-</span> Flutter</span>
        <span className="code-indent"><span className="sy-punct">-</span> Kotlin</span>
        <span className="code-indent"><span className="sy-punct">-</span> Cross-platform</span>
        <span className="code-indent"><span className="sy-punct">-</span> State management</span>
      </div>

      <div className="code-block">
        <span className="sy-keyword">BACKEND_API:</span>
        <span className="code-indent"><span className="sy-punct">-</span> REST APIs</span>
        <span className="code-indent"><span className="sy-punct">-</span> Laravel</span>
        <span className="code-indent"><span className="sy-punct">-</span> Payment Gateway</span>
      </div>

      <div className="code-block">
        <span className="sy-keyword">DATA_SYS:</span>
        <span className="code-indent"><span className="sy-punct">-</span> Database Engineering</span>
        <span className="code-indent"><span className="sy-punct">-</span> Data modeling</span>
        <span className="code-indent"><span className="sy-punct">-</span> SQL</span>
      </div>

      <div className="code-block">
        <span className="sy-keyword">APPLIED_AI:</span>
        <span className="code-indent"><span className="sy-punct">-</span> Python</span>
        <span className="code-indent"><span className="sy-punct">-</span> CNN</span>
        <span className="code-indent"><span className="sy-punct">-</span> YOLOv11</span>
        <span className="code-indent"><span className="sy-punct">-</span> IndoBERT</span>
        <span className="code-indent"><span className="sy-punct">-</span> IoT</span>
      </div>
    </>
  )

  const renderProjectsJson = () => (
    <>
      <div className="code-block">
        <span className="sy-punct">[</span>
        
        {/* Project 1 */}
        <span className="code-indent"><span className="sy-punct">{'{'}</span></span>
        <span className="code-indent-2"><span className="sy-var">"id"</span><span className="sy-punct">:</span> <span className="sy-str">"fisioprime"</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"title"</span><span className="sy-punct">:</span> <span className="sy-str">"Fisioprime"</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"description"</span><span className="sy-punct">:</span> <span className="sy-str">"Health‑tech mobile app for physiotherapy home‑visit services: core business logic, booking flow, and secure payment gateway integration."</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"tags"</span><span className="sy-punct">:</span> <span className="sy-punct">[</span><span className="sy-str">"FLUTTER"</span><span className="sy-punct">,</span> <span className="sy-str">"KOTLIN"</span><span className="sy-punct">,</span> <span className="sy-str">"PAYMENTS"</span><span className="sy-punct">,</span> <span className="sy-str">"HEALTH_TECH"</span><span className="sy-punct">],</span></span>
        <span className="code-indent-2"><span className="sy-var">"logo"</span><span className="sy-punct">:</span> <span className="sy-str">"/assets/logos/logo_fisioprime.png"</span></span>
        <div className="image-preview" style={{marginLeft: 48}}><img src={logoFisioprime} alt="Fisioprime" width={80} style={{background: 'white', padding: 4}}/></div>
        <span className="code-indent"><span className="sy-punct">{'}'},</span></span>

        {/* Project 2 */}
        <span className="code-indent"><span className="sy-punct">{'{'}</span></span>
        <span className="code-indent-2"><span className="sy-var">"id"</span><span className="sy-punct">:</span> <span className="sy-str">"vulgar-detection"</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"title"</span><span className="sy-punct">:</span> <span className="sy-str">"Deteksi Thumbnail Vulgar"</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"description"</span><span className="sy-punct">:</span> <span className="sy-str">"Sistem deteksi otomatis untuk thumbnail vulgar pada video Youtube. Menggunakan algoritma YoloV11 untuk Computer Vision dan IndoBERT untuk analisis teks."</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"tags"</span><span className="sy-punct">:</span> <span className="sy-punct">[</span><span className="sy-str">"YOLOV11"</span><span className="sy-punct">,</span> <span className="sy-str">"INDOBERT"</span><span className="sy-punct">,</span> <span className="sy-str">"PYTHON"</span><span className="sy-punct">,</span> <span className="sy-str">"MACHINE_LEARNING"</span><span className="sy-punct">]</span></span>
        <span className="code-indent"><span className="sy-punct">{'}'},</span></span>

        {/* Project 3 */}
        <span className="code-indent"><span className="sy-punct">{'{'}</span></span>
        <span className="code-indent-2"><span className="sy-var">"id"</span><span className="sy-punct">:</span> <span className="sy-str">"uangcek"</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"title"</span><span className="sy-punct">:</span> <span className="sy-str">"Counterfeit Banknote Detection"</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"description"</span><span className="sy-punct">:</span> <span className="sy-str">"Flutter mobile app for counterfeit detection using IoT sensors (infrared + color sensor) and Convolutional Neural Networks."</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"tags"</span><span className="sy-punct">:</span> <span className="sy-punct">[</span><span className="sy-str">"FLUTTER"</span><span className="sy-punct">,</span> <span className="sy-str">"IOT"</span><span className="sy-punct">,</span> <span className="sy-str">"CNN"</span><span className="sy-punct">,</span> <span className="sy-str">"INFRARED"</span><span className="sy-punct">],</span></span>
        <span className="code-indent-2"><span className="sy-var">"logo"</span><span className="sy-punct">:</span> <span className="sy-str">"/assets/logos/logo_uangcek.png"</span></span>
        <div className="image-preview" style={{marginLeft: 48}}><img src={logoUangcek} alt="Uangcek" width={80} style={{background: 'white', padding: 4}}/></div>
        <span className="code-indent"><span className="sy-punct">{'}'},</span></span>

        {/* Project 4 */}
        <span className="code-indent"><span className="sy-punct">{'{'}</span></span>
        <span className="code-indent-2"><span className="sy-var">"id"</span><span className="sy-punct">:</span> <span className="sy-str">"kolamguard"</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"title"</span><span className="sy-punct">:</span> <span className="sy-str">"KolamGuard"</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"description"</span><span className="sy-punct">:</span> <span className="sy-str">"Dashboard for real‑time water turbidity monitoring with field‑friendly UI for continuous IoT observation."</span><span className="sy-punct">,</span></span>
        <span className="code-indent-2"><span className="sy-var">"tags"</span><span className="sy-punct">:</span> <span className="sy-punct">[</span><span className="sy-str">"FLUTTER"</span><span className="sy-punct">,</span> <span className="sy-str">"REAL_TIME"</span><span className="sy-punct">,</span> <span className="sy-str">"IOT"</span><span className="sy-punct">,</span> <span className="sy-str">"MONITORING"</span><span className="sy-punct">],</span></span>
        <span className="code-indent-2"><span className="sy-var">"logo"</span><span className="sy-punct">:</span> <span className="sy-str">"/assets/logos/logo_kolamguard.png"</span></span>
        <div className="image-preview" style={{marginLeft: 48}}><img src={logoKolamguard} alt="KolamGuard" width={80} style={{background: 'white', padding: 4}}/></div>
        <span className="code-indent"><span className="sy-punct">{'}'}</span></span>

        <span className="sy-punct">]</span>
      </div>
    </>
  )

  const renderExperienceMd = () => (
    <>
      <div className="code-block">
        <span className="sy-keyword"># Work Experience</span>
      </div>
      
      <div className="code-block">
        <span className="sy-keyword">## Mobile Apps Developer @ PT HOME VISIT INDONESIA</span><br/>
        <span className="sy-comment">&gt; Jun 2023 — Apr 2026</span>
      </div>

      <div className="code-block">
        <span className="sy-punct">-</span> Core developer of Fisioprime (health‑tech) and led the early development phase.<br/>
        <span className="sy-punct">-</span> Pioneered a migration from native Android (Kotlin) to Flutter for a unified cross‑platform experience.<br/>
        <span className="sy-punct">-</span> Designed and implemented business logic for physiotherapy home‑visit services.<br/>
        <span className="sy-punct">-</span> Integrated a secure payment gateway and optimized application performance.
      </div>

      <div className="code-block">
        <span className="sy-keyword"># Education History</span>
      </div>

      <div className="code-block">
        <span className="sy-keyword">## S‑1 Teknologi Informasi @ Universitas Sumatera Utara</span><br/>
        <span className="sy-comment">&gt; Aug 2019 — Jan 2026</span>
      </div>
    </>
  )

  const renderContent = () => {
    switch (activeFile) {
      case 'profile.ts': return renderProfileTs()
      case 'skills.yml': return renderSkillsYml()
      case 'projects.json': return renderProjectsJson()
      case 'experience.md': return renderExperienceMd()
      default: return null
    }
  }

  return (
    <div className="ide-container">
      {/* Top Bar */}
      <div className="ide-topbar">
        <span>Gideon Ginting - VS Code</span>
      </div>

      {/* Main Content */}
      <div className="ide-main">
        {/* Activity Bar */}
        <div className="ide-activitybar">
          <div className="ide-activity-icon active">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2h-12v20h20V8.5l-8-6.5zm-1 1.5l5.5 4.5h-5.5v-4.5zm6 17h-16v-18h9v6h7v12z"/></svg>
          </div>
          <div className="ide-activity-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </div>
          <div className="ide-activity-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
          </div>
        </div>

        {/* Sidebar */}
        <div className="ide-sidebar">
          <div className="sidebar-header">EXPLORER</div>
          <div className="sidebar-section-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: 4}}><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
            PORTFOLIO
          </div>
          <div>
            {files.map(f => (
              <div 
                key={f.name} 
                className={`file-item ${activeFile === f.name ? 'active' : ''}`}
                onClick={() => handleOpenFile(f.name)}
              >
                <span className="file-icon" style={{color: f.color, fontFamily: 'sans-serif', fontSize: 10, fontWeight: 'bold'}}>{f.icon}</span>
                {f.name}
              </div>
            ))}
          </div>
        </div>

        {/* Editor */}
        <div className="ide-editor">
          {/* Tabs */}
          <div className="ide-tabs">
            {openFiles.map(f => {
              const fileObj = files.find(file => file.name === f);
              return (
                <div 
                  key={f} 
                  className={`ide-tab ${activeFile === f ? 'active' : ''}`}
                  onClick={() => setActiveFile(f)}
                >
                  <span className="file-icon" style={{color: fileObj?.color, fontFamily: 'sans-serif', fontSize: 10, fontWeight: 'bold'}}>{fileObj?.icon}</span>
                  {f}
                  <span 
                    style={{marginLeft: 12, padding: '0 4px', borderRadius: 4, visibility: openFiles.length > 1 ? 'visible' : 'hidden'}} 
                    className="close-btn"
                    onClick={(e) => handleCloseFile(e, f)}
                  >
                    ×
                  </span>
                </div>
              )
            })}
          </div>

          {/* Breadcrumbs */}
          <div className="ide-breadcrumb">
            src <span style={{margin: '0 6px'}}>&gt;</span> {activeFile}
          </div>

          {/* Content Pane */}
          {activeFile ? (
            <div className="ide-editor-content">
              <div className="ide-lines">
                {lines.map(line => <div key={line}>{line}</div>)}
              </div>
              <div className="ide-code">
                {renderContent()}
              </div>
            </div>
          ) : (
            <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)'}}>
              <div style={{textAlign: 'center'}}>
                <h2 style={{fontWeight: 'normal', marginBottom: 12}}>Gideon Ginting</h2>
                <p>Select a file to view code</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="ide-statusbar">
        <div className="ide-statusbar-section">
          <span style={{cursor: 'pointer'}} title="Remote connection">&gt;<span style={{marginLeft: 2}} /> WSL: Ubuntu</span>
          <span style={{display: 'flex', alignItems: 'center', gap: 4}} title="Git branch"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.983 2.502a3.75 3.75 0 0 1 3.513 5.064c.264.484.514.974.75 1.47a3.75 3.75 0 1 1-1.393.684c-.227-.478-.468-.951-.722-1.417a3.754 3.754 0 0 1-5.115-.494v8.384a3.75 3.75 0 1 1-1.5 0v-8.384a3.75 3.75 0 1 1 4.467-5.307zm1.517 3.748a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zM10.5 17.75a2.25 2.25 0 1 0-3 0 2.25 2.25 0 0 0 3 0zm8.25-6a2.25 2.25 0 1 0-3 0 2.25 2.25 0 0 0 3 0z"/></svg> main</span>
          <span title="Errors and Warnings">❌ 0 ⚠️ 0</span>
        </div>
        <div className="ide-statusbar-section">
          <span>{activeFile.split('.').pop()?.toUpperCase()}</span>
          <span>UTF-8</span>
          <span>Prettier</span>
        </div>
      </div>
    </div>
  )
}

export default App
