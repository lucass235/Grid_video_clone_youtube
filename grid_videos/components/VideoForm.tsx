import React, { useState } from 'react';
import Video from '@/model/Video';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

type Props = {
    video?: Video;
    onSave?: any
};

const VideoForm = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<Video>({
        id: props.video?.id || '',
        title: props.video?.title || '',
        userCreator: props.video?.userCreator || '',
        description: props.video?.description || '',
        thumbnail: props.video?.thumbnail || '',
        videoUrl: props.video?.videoUrl || '',
        duration: props.video?.duration || 0,
        views: props.video?.views || 0,
    });

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        props.onSave(formData);
        handleClose();
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                {props.video ? 'Editar' : 'Adicionar'} Vídeo
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.video ? 'Editar' : 'Adicionar'} Vídeo</DialogTitle>
                <DialogContent>
                    {/* Aqui você pode adicionar os TextFields para cada propriedade de vídeo */}
                    <TextField 
                        autoFocus
                        margin="dense"
                        name="id"
                        label="ID"
                        type="text"
                        fullWidth
                        value={formData.id}
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        name="title"
                        label="Título"
                        type="text"
                        fullWidth
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="userCreator"
                        label="Criador"
                        type="text"
                        fullWidth
                        value={formData.userCreator}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="description"
                        label="Descrição"
                        type="text"
                        fullWidth
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="thumbnail"
                        label="Thumbnail"
                        type="text"
                        fullWidth
                        value={formData.thumbnail}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="videoUrl"
                        label="URL do vídeo"
                        type="text"
                        fullWidth
                        value={formData.videoUrl}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="duration"
                        label="Duração"
                        type="number"
                        fullWidth
                        value={formData.duration}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="views"
                        label="Visualizações"
                        type="number"
                        fullWidth
                        value={formData.views}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default VideoForm;
