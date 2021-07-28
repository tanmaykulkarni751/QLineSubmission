import React, { useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import "./../../styles/Progress.css";

export default function Progress(props) {

    useEffect(() => {}, [props.updated])

    const values = props.data;
    return (
        <ProgressBar className="bar">
            <ProgressBar variant="dark" now={2} key={1} />
            {(values[0] === 1) ? 
                <ProgressBar variant="success" now={12} key={1} /> :
                    (values[0] === 0) ? <ProgressBar variant="danger" now={12} key={1} /> :
                        <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={3} />}
            <ProgressBar variant="dark" now={2} key={1} />
            {(values[1] === 1) ? 
                <ProgressBar variant="success" now={12} key={1} /> :
                    (values[1] === 0) ? <ProgressBar variant="danger" now={12} key={1} /> :
                        <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={3} />}
            <ProgressBar variant="dark" now={2} key={1} />
            {(values[2] === 1) ? 
                <ProgressBar variant="success" now={12} key={1} /> :
                    (values[2] === 0) ? <ProgressBar variant="danger" now={12} key={1} /> :
                        <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={3} />}
            <ProgressBar variant="dark" now={2} key={1} />
            {(values[3] === 1) ? 
                <ProgressBar variant="success" now={12} key={1} /> :
                    (values[3] === 0) ? <ProgressBar variant="danger" now={12} key={1} /> :
                        <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={3} />}
            <ProgressBar variant="dark" now={2} key={1} />
            {(values[4] === 1) ? 
                <ProgressBar variant="success" now={12} key={1} /> :
                    (values[4] === 0) ? <ProgressBar variant="danger" now={12} key={1} /> :
                        <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={3} />}
            <ProgressBar variant="dark" now={2} key={1} />
            {(values[5] === 1) ? 
                <ProgressBar variant="success" now={12} key={1} /> :
                    (values[5] === 0) ? <ProgressBar variant="danger" now={12} key={1} /> :
                        <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={3} />}
            <ProgressBar variant="dark" now={2} key={1} />
            {(values[6] === 1) ? 
                <ProgressBar variant="success" now={12} key={1} /> :
                    (values[6] === 0) ? <ProgressBar variant="danger" now={12} key={1} /> :
                        <ProgressBar style={{backgroundColor:"#808080"}} now={12} key={3} />}
            <ProgressBar variant="dark" now={2} key={1} />
        </ProgressBar>
    )
}