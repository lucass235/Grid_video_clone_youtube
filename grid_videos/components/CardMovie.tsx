import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import PopUp from "./PopUp";
import Video from "@/model/Video";

type Props = {
  dataVideo: Video;
};

export default function CardMovie(props: Props) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Card variant="outlined" sx={{ width: 320 }}>
        <CardOverflow>
          <button onClick={() => setOpen(!open)}>
            <AspectRatio ratio="2">
              <img
                src={props.dataVideo.thumbnail}
                srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
          </button>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">{ props.dataVideo.title}</Typography>
          <Typography level="body-sm">{ props.dataVideo.userCreator}</Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              {props.dataVideo.views} views
            </Typography>
            {/* <Divider orientation="vertical" />
            <Typography
              level="body-xs"
              fontWeight="md"
              textColor="text.secondary"
            >
              1 hour ago
            </Typography> */}
          </CardContent>
        </CardOverflow>
      </Card>
      <PopUp dataVideo={props.dataVideo} showPopUp={open} />
    </>
  );
}
