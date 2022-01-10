import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div align='center'>
            <Loader
                type="Bars"
                color="rgb(60,179,113)"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </div>
    )
}

export default Loading;