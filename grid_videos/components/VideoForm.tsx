import React, { useState, useEffect } from 'react';
import Video from '@/model/Video';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import CreateIcon from "@mui/icons-material/Create";

type Props = {
    video?: Video;
    onSave?: any
};

const VideoForm = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState<Video>({
        id: props.video?.id || '',
        title: props.video?.title || '',
        userCreator: props.video?.userCreator || '',
        description: props.video?.description || '',
        thumbnail: props.video?.thumbnail || '',
        videoUrl: props.video?.videoUrl || '',
        durationVideo: props.video?.durationVideo || 0,
        viewsVideo: props.video?.viewsVideo || 0,
    });
    
    const [fieldErrors, setFieldErrors] = useState({
        id: false,
        title: false,
        userCreator: false,
        description: false,
        thumbnail: false,
        videoUrl: false,
        durationVideo: false,
        viewsVideo: false,
    });
    
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const isFormValid = Object.values(fieldErrors).every((error) => error === false) ;

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let isValid = true;
        if (name === 'durationVideo' || name === 'viewsVideo') {
            isValid = !isNaN(value) && Number(value) >= 0;
        } else {
            isValid = value.trim() !== '';
        }
        setFieldErrors({ ...fieldErrors, [name]: !isValid });
    };

    const handleSubmit = () => {
        props.onSave(formData, isEdit);
        setFormData({
            id: '',
            title: '',
            userCreator: '',
            description: '',
            thumbnail: '',
            videoUrl: '',
            durationVideo: 0,
            viewsVideo: 0,
        });
        handleClose();
    };
    
    useEffect(() => {
        if (props.video) {
            setIsEdit(true);
        }
    }, []);

    useEffect(() => {
        setIsEdit(!!props.video);
        setFieldErrors({
            id: !props.video?.id,
            title: !props.video?.title,
            userCreator: !props.video?.userCreator,
            description: !props.video?.description,
            thumbnail: !props.video?.thumbnail,
            videoUrl: !props.video?.videoUrl,
            durationVideo: !(props.video?.durationVideo ?? 0 > 0),
            viewsVideo: !(props.video?.viewsVideo ?? 0 >= 0),
        });
    }, [props.video]);



    return (<>
        {props.video ?
        <button onClick={handleClickOpen}>
            <CreateIcon sx={{ fontSize: 22 }}></CreateIcon>
        </button> :
        <Button variant="outlined" onClick={handleClickOpen}>
            Adicionar video
        </Button> }
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{props.video ? 'Editar' : 'Adicionar'} Vídeo</DialogTitle>
            <DialogContent>
                <TextField error={fieldErrors.id} helperText={fieldErrors.id ? 'Campo obrigatório' : ''}
                    autoFocus margin="dense" name="id" label="ID" type="text" fullWidth value={formData.id}
                    onChange={handleChange} />
                    
                <TextField error={fieldErrors.title} helperText={fieldErrors.title ? 'Campo obrigatório' : ''}
                    autoFocus margin="dense" name="title" label="Título" type="text" fullWidth value={formData.title}
                    onChange={handleChange} />
                    
                <TextField error={fieldErrors.userCreator} helperText={fieldErrors.userCreator ? 'Campo obrigatório' : ''}
                    margin="dense" name="userCreator" label="Criador" type="text" fullWidth value={formData.userCreator}
                    onChange={handleChange} />
                    
                <TextField error={fieldErrors.description} helperText={fieldErrors.description ? 'Campo obrigatório' : ''}
                    margin="dense" name="description" label="Descrição" type="text" fullWidth value={formData.description}
                    onChange={handleChange} />
                    
                <TextField error={fieldErrors.thumbnail} helperText={fieldErrors.thumbnail ? 'Campo obrigatório' : ''}
                    margin="dense" name="thumbnail" label="Thumbnail" type="text" fullWidth value={formData.thumbnail}
                    onChange={handleChange} />
                    
                <TextField error={fieldErrors.videoUrl} helperText={fieldErrors.videoUrl ? 'Campo obrigatório' : ''}
                    margin="dense" name="videoUrl" label="URL do vídeo" type="text" fullWidth value={formData.videoUrl}
                    onChange={handleChange} />
                    
                <TextField error={fieldErrors.durationVideo} helperText={fieldErrors.durationVideo ? 'Campo obrigatório' : ''}
                    margin="dense" name="durationVideo" label="Duração" type="number" fullWidth value={formData.durationVideo}
                    onChange={handleChange} />
                    
                <TextField error={fieldErrors.viewsVideo} helperText={fieldErrors.viewsVideo ? 'Campo obrigatório' : ''}
                    margin="dense" name="viewsVideo" label="Visualizações" type="number" fullWidth value={formData.viewsVideo}
                    onChange={handleChange} />
                    
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleSubmit} color="primary" disabled={!isFormValid}>
                    {props.video ? 'Salvar' : 'Adicionar'}
                </Button>
            </DialogActions>
        </Dialog>
    </>);
};

export default VideoForm;
