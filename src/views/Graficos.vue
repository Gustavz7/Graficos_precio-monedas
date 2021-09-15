<template>
  <div>
    <h1>Graficos de demostracion usando la libreria VueChart.js</h1>
    <Modulo_graficos />
    <p>Datos proporcionados por
      <a href="https://mindicador.cl/">mindicador.cl</a>
    </p>
    <div class="dev">
      <p class="p-dev"><b>Guz</b>Dev</p>
    </div>
  </div>
</template>
<script>
import Modulo_graficos from "@/components/Modulo_graficos";
export default {
  name: "Graficos",
  components: { Modulo_graficos },
  data: () => {
    return {};
  },
};
</script>
<style>
.card {
  padding: 0;
  margin: 20px;
  width: 750px;
  height: auto;
  box-shadow: 10px 10px 10px 10px rgb(165, 165, 165);
}

.card-header {
}

.card-body {
  text-align: center;
}

.card-footer {
  left: 0;
}
.dev {
  font-size: 150%;
}
</style>
