/*
  The purpose of this component is to deal with scenario navigation between each views.

*/

import { RootComponent } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  role: 'action',
  group: 'feature'
})
export class FeatureAction {
  render() {
    return (
      <bearer-navigator btnProps={ { content:"Feature Action", kind:"primary" } } direction="right">
        <bearer-navigator-auth-screen />
        <bearer-navigator-screen navigationTitle="My first screen">
          <list-calendars />
        </bearer-navigator-screen>
      </bearer-navigator>
    )
  }
}
