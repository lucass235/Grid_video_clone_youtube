import Video from "@/model/Video";
import axios from "axios";

const defaultUrl: string = "http://localhost:3000/router";
export async function getVideos(): Promise<Video[]> {
	try {
		const response = await axios.get(defaultUrl);
		return response.data.data; 
	} catch (error) {
		console.error("Erro ao obter vídeos:", error);
		throw error; 
	}
}

export async function postVideo(video: Video) {
	let response = null;
	try {
		response = await axios.post(defaultUrl, video);
    } catch (error) {
		console.error("Erro ao postar vídeo:", error);
		throw error;
    }
	return response
}

export async function putVideo(video: Video) {
	let response = null;
	try {
		response = await axios.put(defaultUrl, video);
	} catch (error) {
		console.error("Erro ao editar vídeo:", error);
		throw error;
	}
	return response
}

export async function deleteVideo(video: Video) {
	let response = null;
	try {
		response = await axios.delete(defaultUrl, { data: video });
	} catch (error) {
		console.error("Erro ao deletar vídeo:", error);
		throw error;
	}
	return response
}