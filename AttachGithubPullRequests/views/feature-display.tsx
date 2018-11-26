/*
  The purpose of this component is to be the result of your scenario.
  Its responsibility is to retrieve the scenario state from a previous action
  of a user.
*/
import { RootComponent, Input, BearerRef } from '@bearer/core'
import '@bearer/ui'

import { PullRequest } from './types'

@RootComponent({
  role: 'display',
  group: 'feature'
})
export class FeatureDisplay {
  @Input() pullRequests: BearerRef<PullRequest[]> = []

  render() {
    if (!this.pullRequests.length) {
      return <bearer-alert kind="info">No Pull Requests attached</bearer-alert>
    }
    return <attached-pull-requests pullRequests={this.pullRequests} />
  }
}
