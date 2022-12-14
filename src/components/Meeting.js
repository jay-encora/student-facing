import React from 'react';
import { JitsiMeeting } from '@jitsi/react-sdk';

const DOMAIN_NAME = "meet.jit.si";

export const Meeting = ({ meetingId }) => {
    if (!meetingId) return;

    let roomName = meetingId;
    if (meetingId.indexOf(DOMAIN_NAME) !== -1) {
        const splits = meetingId.split(DOMAIN_NAME);
        roomName = splits[splits.length - 1];
    }

    return (
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <JitsiMeeting
                // domain="meet.jit.si"
                roomName={roomName}
                configOverwrite={{
                    startWithAudioMuted: true,
                    disableModeratorIndicator: true,
                    startScreenSharing: true,
                    enableEmailInStats: false,
                    enableWelcomePage: true,
                    // prejoinPageEnabled: false
                }}
                interfaceConfigOverwrite={{
                    // DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                    BRAND_WATERMARK_LINK: '#',
                    SHOW_BRAND_WATERMARK: false,
                    SHOW_WATERMARK_FOR_GUESTS: false,
                    SHOW_JITSI_WATERMARK: false,
                    SHOW_POWERED_BY: false,
                    SHOW_CHROME_EXTENSION_BANNER: false,
                    NATIVE_APP_NAME: 'TEST',
                    APP_NAME: 'TESTING'
                }}
                userInfo={{
                    displayName: '',
                    // email: 'jay.mishra@encora.com'
                }}
                onApiReady={(externalApi) => {
                    // here you can attach custom event listeners to the Jitsi Meet External API
                    // you can also store it locally to execute commands
                }}
                getIFrameRef={(iframeRef) => {
                    iframeRef.style.height = `${window.innerHeight}px`;
                    iframeRef.style.width = `${window.innerWidth}px`
                }}
            />
        </div>
    )
}