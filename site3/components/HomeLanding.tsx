import React from 'react'
import Image from 'next/image'

const HomeLanding = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '80px' }}>
            <div style={{ flex: 1 }}>
                <p>Some stuff here</p>
            </div>
            <div style={{ flex: 1 }}>
                <Image src="/BJJTemplate.jpg" alt="Logo" width={40} height={40} />
            </div>
        </div>
    );
}

export default HomeLanding