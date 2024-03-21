<template>
  <div class="max-w-screen-sm mx-auto bg-white dark:bg-neutral-950">
    <div class="hover:bg-slate-950">hello</div>
    <input type="text" class="outline-none hover:bg-black hover:text-white" />
    <div class="shadow-lg shadow-green-500 w-full h-52 bg-gradient-to-tr from-green-500 to-cyan-500"></div>
    <table>
      <tr v-for="i in 20" :key="i" class="even:bg-slate-500 odd:bg-slate-100">
        <td class="px-10 py-5">Nama</td>
        <td class="px-10 py-5">Email</td>
      </tr>
    </table>

    <div class="w-full h-52 bg-slate-300 flex justify-center">
      <div class="w-10 h-10 bg-black rounded-full"></div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-3"
    >
      <div v-for="i in 21" :key="i" class="bg-black w-full h-12 mt-2"></div>
    </div>
  </div>
</template>
