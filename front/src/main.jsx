import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskMainBox } from './components/TaskMainBox'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskMainBox />
  </StrictMode>,
)
