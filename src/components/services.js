import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import MemoryIcon from '@material-ui/icons/Memory';

import * as Constants from '../constants/services';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
        textTransform: 'none'
    },
}));



class ServicesPanel extends React.Component {
    render() {
        return (
            <div id="service-panel">
                <Grid container direction="column" alignItems="center" justify="center">
                    <RequestButton/>
                </Grid>
            </div>
        );
    }
}


function RequestButton() {
    const classes = useStyles();

    const handleTextarea = (data) => {
        const element = document.getElementById("lb");
        element.value = "";
        element.value = data;
    }

    const parseContent = (content) => {
        return content.split(Constants.PROB_DELIMITER)[0];
    }

    const handleServices = async function(task) {
        const element = document.getElementById("lb");
        if (element.value.length <= 0) {
            return null;
        }

        switch (task) {
            case Constants.TASK_SEG: {
                const response = await fetch(Constants.TASK_PREFIX_SEG + element.value);
                const contentType = await response.headers.get('content-type');
                if (contentType === Constants.CONTENT_TYPE_JSON) {
                    let content = await response.json();
                    content = await content.result;
                    const res = content;
                    return res;
                }
                else {
                    // e.g. text/html; charset=utf-8, etc
                    return Constants.UNSUPPORTED_FORMAT;
                }
            }

            case Constants.TASK_SEGTAG: {
                const response = await fetch(Constants.TASK_PREFIX_SEGTAG + element.value);
                const contentType = await response.headers.get('content-type');
                if (contentType === Constants.CONTENT_TYPE_JSON) {
                    let content = await response.json();
                    content = await content.result;
                    const res = content;
                    return res;
                }
                else {
                    // e.g. text/html; charset=utf-8, etc
                    return Constants.UNSUPPORTED_FORMAT;
                }
            }

            case Constants.TASK_SEGTAGPARSE: {
                const response = await fetch(Constants.TASK_PREFIX_SEGTAGPARSE + element.value);
                const contentType = await response.headers.get('content-type');
                if (contentType === Constants.CONTENT_TYPE_JSON) {
                    let content = await response.json();
                    content = await content.result;
                    if (content) {
                        const res = parseContent(content);
                        return res; 
                    }
                    else {
                        return Constants.PARSING_FAILURE;
                    }
                }
                else {
                    // e.g. text/html; charset=utf-8, etc
                    return Constants.UNSUPPORTED_FORMAT;
                }
            }

            case Constants.TASK_TAG: {
                const response = await fetch(Constants.TASK_PREFIX_TAG + element.value);
                const contentType = await response.headers.get('content-type');
                if (contentType === Constants.CONTENT_TYPE_JSON) {
                    let content = await response.json();
                    content = await content.result;
                    const res = content;
                    return res;
                }
                else {
                   // e.g. text/html; charset=utf-8, etc
                   return Constants.UNSUPPORTED_FORMAT;
                }
            }

            case Constants.TASK_TAGPARSE: {
                const response = await fetch(Constants.TASK_PREFIX_TAGPARSE + element.value);
                const contentType = await response.headers.get('content-type');
                if (contentType === Constants.CONTENT_TYPE_JSON) {
                    let content = await response.json();
                    content = await content.result;
                    if (content) {
                        const res = parseContent(content);
                        return res; 
                    }
                }
                else {
                    // e.g. text/html; charset=utf-8, etc
                    return Constants.UNSUPPORTED_FORMAT;
                }
            }
            
            break;

            default: {
                return null;
            }
        }
    }

    const handleRequestButton = async function(task) {
        const res = await handleServices(task);
        handleTextarea(res);
    }

    return (
        <div className={classes.button}>
            <Button
                id="seg"
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<LineStyleIcon />}
                onClick={() => handleRequestButton(Constants.TASK_SEG)}
            >
                segment
            </Button>
            <Button
                id="tag"
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<BookmarkBorderIcon />}
                onClick={() => handleRequestButton(Constants.TASK_TAG)}
            >
                tagging
            </Button>

            <Button
                id="parse"
                variant="outlined"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<MemoryIcon />}
                onClick={() => handleRequestButton(Constants.TASK_SEGTAGPARSE)}
            >
                parsing
            </Button>
        </div>
    );
}


export default ServicesPanel;