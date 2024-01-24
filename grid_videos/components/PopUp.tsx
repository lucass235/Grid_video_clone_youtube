"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import VideoPlayer from "./VideoPlayer";
import Video from "@/model/Video";
import { useEffect } from "react";

type Props = {
    dataVideo: Video;
    showPopUp: boolean;
};

export default function PopUp(props: Props) {
    const [open, setOpen] = React.useState(false);
    const [pause, setPause] = React.useState(false);

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        }, ref: React.Ref<unknown>) {
            return <Slide direction="up" ref={ref} {...props} />;
    });

    useEffect(() => {
        setOpen(props.showPopUp);
    }, [props.showPopUp, setOpen]);

    return (<>
        <Dialog maxWidth="lg" open={open} TransitionComponent={Transition} keepMounted
            onClose={() => setOpen(false)} aria-describedby="alert-dialog-slide-description">
                <DialogTitle className="text-center">
                    {props.dataVideo.title}
                </DialogTitle>
                <DialogContent>
                    <VideoPlayer src={props.dataVideo.videoUrl} play={pause} />
                    <DialogContentText className="text-center">
                        {props.dataVideo.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="outlined"
                        onClick={() => {
                        setOpen(false);
                        setPause(true);
                        }}>
                        Fechar
                    </Button>
                </DialogActions>
        </Dialog>
    </>);
}
