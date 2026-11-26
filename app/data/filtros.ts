import { projetos } from "./projetos";

export const todasTecnologias = [...new Set(projetos.flatMap((item) => item.tecnologias))];