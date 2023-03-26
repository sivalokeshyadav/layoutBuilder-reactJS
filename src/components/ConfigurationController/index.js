// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeNavBarLeft = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeNavBarRight = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="layout-container">
          <div className="heading-container">
            <h1 className="heading">Layout</h1>
          </div>
          <div className="checking-items">
            <div className="contents-container">
              <input
                type="checkbox"
                className="check-box"
                id="content"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label className="checkbox-content" htmlFor="content">
                Content
              </label>
            </div>
            <div className="left-nav-container">
              <input
                type="checkbox"
                className="check-box"
                id="leftnavbar"
                checked={showLeftNavbar}
                onChange={onChangeNavBarLeft}
              />
              <label className="checkbox-content" htmlFor="leftnavbar">
                Left Navbar
              </label>
            </div>
            <div className="left-nav-container">
              <input
                type="checkbox"
                className="check-box"
                id="rightnavbar"
                checked={showRightNavbar}
                onChange={onChangeNavBarRight}
              />
              <label className="checkbox-content" htmlFor="rightnavbar">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
