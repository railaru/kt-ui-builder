import React, { Component } from 'react'

export class DevicePreviewChanger extends Component {
  render() {
    return (        
        <div class="device-preview-changer bg-2 box-shadow">
            <div id="toggleSmallPreview" class="device-preview-changer__option cursor-pointer">
                small
            </div>
            <div id="toggleMediumPreview" class="device-preview-changer__option cursor-pointer">
                medium
            </div>
            <div id="toggleLargePreview" class="device-preview-changer__option cursor-pointer">
                large
            </div>
            <div id="toggleXlPreview" class="device-preview-changer__option cursor-pointer">
                xl
            </div>
        </div>
    )
  }
}

export default DevicePreviewChanger
