// src/routes/autor_routes.ts
import { Router } from 'express';
import { AutorService } from '../service/AutorService';

const router = Router();
const autorService = new AutorService();

// GET /autores
router.get('/autores', async (req, res) => {
  const autores = await autorService.listarAutores();
  res.json(autores);
});

// GET /autores/:id
router.get('/autores/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const autor = await autorService.visualizarAutor(id);
  res.json(autor);
});

// POST /autores
router.post('/autores', async (req, res) => {
  const { nome } = req.body;
  const novoAutor = await autorService.criarAutores({ nome });
  res.status(201).json(novoAutor);
});

// PUT /autores/:id
router.put('/autores/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { nome } = req.body;
  const autorAtualizado = await autorService.atualizarAutor(id, { nome });
  res.json(autorAtualizado);
});

// DELETE /autores/:id
router.delete('/autores/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  await autorService.deletarAutor(id);
  res.status(204).send(); // No Content
});

export default router;
