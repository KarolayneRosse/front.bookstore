<template>
  <div>
    <div class="bg-dark text-light pt-2 footSet" fluid>
      <b-row class="mt-5">
        <div class="ml-3">
          <b-row >
            <b-icon
              class="text-light ml-5 mt-1"
              icon="linkedin"
              scale="1.5"
            ></b-icon>
            <p class="ml-3 mb-5">
              <a
                href="http://www.linkedin.com/in/karolayne-rosse"
                target="_blank"
                rel="noopener noreferrer"
                class="text-light"
                >karolayne_rosse</a
              >
            </p>
          </b-row>
        </div>
        <div style="margin-left: 63px;">
          <b-row>
            <b-icon
              class="text-light mt-1"
              icon="envelope"
              scale="1.5"
            ></b-icon>
            <p class="ml-3 mb-5">karolaynerosse@gmail.com</p>
          </b-row>
        </div>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footSet {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
body {
  background-color: black;
}
</style>
