import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import PopUp from "./PopUp";
import Video from "@/model/Video";
import VideoForm from "./VideoForm";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteVideo } from "@/src/api/videoHttp";

type Props = {
    dataVideo: Video;
    onSave?: any;
};

const handlerVideoDelete = async (video: Video) => {
    try {
        await deleteVideo(video);
        alert("Video deleted");
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
};

export default function CardMovie(props: Props) {
    
    const [open, setOpen] = React.useState(false);

    return (<>
        <Card variant="outlined" sx={{ width: 320 }}>
            <CardOverflow>
                <button onClick={() => setOpen(!open)}>
                    <AspectRatio ratio="2">
                        <img src={props.dataVideo.thumbnail} loading="lazy" alt="" />
                    </AspectRatio>
                </button>
            </CardOverflow>
            <CardContent>
                <Typography level="title-md">{props.dataVideo.title}</Typography>
                <Typography level="body-sm">{props.dataVideo.userCreator}</Typography>
                <Typography level="body-sm">{props.dataVideo.durationVideo} Min</Typography>
            </CardContent>
            <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                        {props.dataVideo.viewsVideo} Visualizações
                    </Typography>
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                        <VideoForm video={props.dataVideo} onSave={props.onSave} />
                    </Typography>
                    <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                        <button onClick={() => handlerVideoDelete(props.dataVideo)}>
                            <DeleteIcon></DeleteIcon>
                        </button>
                    </Typography>
                </CardContent>
            </CardOverflow>
        </Card>
      <PopUp dataVideo={props.dataVideo} showPopUp={open} />
    </>);
}
