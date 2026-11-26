<script setup lang="ts">
import { projetos, type Projeto } from '~/data/projetos'
import { todasTecnologias } from '~/data/filtros';

const tecnologia = ref('Todos');

function selecionarTecnologia (tecnologiaSelecionada: string) {
  tecnologia.value = tecnologiaSelecionada;
}

function estaFiltrado (projeto: Projeto) {
  return tecnologia.value !== 'Todos' && !projeto.tecnologias.includes(tecnologia.value);
}

useSeoMeta({
  title: 'Projetos',
  description: 'Projetos que desenvolvi.'
})
</script>

<template>
  <section class="container mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold">Projetos</h1>
    <p class="mt-2 text-slate-400 text-center md:text-left">Projetos desenvolvidos</p>
    <div class="flex flex-wrap justify-center md:justify-start my-3 gap-2">
      <div 
        v-for="(item, index) of ['Todos', ...todasTecnologias]" :key="index" 
        class="card inline-flex flex-col rounded-xl overflow-hidden border px-3 py-2 text-sm md:p-3 md:text-base w-auto whitespace-nowrap cursor-pointer
          transition-all duration-200
        hover:border-green-500 hover:text-green-400 hover:bg-green-500/10 hover:-translate-y-0.5
        "
        :class="item === tecnologia
          ? 'border-green-500 text-green-400 bg-green-500/10'
          : 'border-slate-700 bg-slate-900/80'"
        @click="selecionarTecnologia(item)"
        >
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjetoCard v-for="projeto in projetos" :key="projeto.titulo" :projeto="projeto" :filtrado="estaFiltrado(projeto)" />
    </div>
  </section>
</template>
