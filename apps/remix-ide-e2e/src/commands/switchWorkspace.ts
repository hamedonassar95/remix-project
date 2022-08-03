import { NightwatchBrowser } from 'nightwatch'
import EventEmitter from 'events'

class switchWorkspace extends EventEmitter {
  command (this: NightwatchBrowser, workspaceName: string): NightwatchBrowser {
    const timestamp = new Date().getTime()
    this.api.waitForElementVisible('[data-id="workspacesSelect"]')
    .click('[data-id="workspacesSelect"]')
    //.saveScreenshot(`./reports/screenshots/workspace_group1.test/1_switchWorkspace${timestamp}.png`)
    .waitForElementVisible(`[data-id="dropdown-item-${workspaceName}"]`)
    .pause(2000)
    .click(`[data-id="dropdown-item-${workspaceName}"]`)
    .pause(3000)
    //.saveScreenshot(`./reports/screenshots/workspace_group1.test/2_afterSwitchWorkspace${timestamp}.png`)
    .perform((done) => {
      done()
      this.emit('complete')
    })
    return this
  }
}

module.exports = switchWorkspace
