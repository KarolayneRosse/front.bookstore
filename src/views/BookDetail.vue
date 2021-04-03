<template>
  <div>
    <div class="float-left">
      <!-- Imagem no lado esquerdo com as outras imagens em baixo em miniatura -->
      <div>
        <b-img src="../assets/teste_image_edited.jpg" height="90" width="90"></b-img>
      </div>
    </div>
    <div>
        <h3>{{book.name}}</h3>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            book: {}
        }
    },
    created(){
        this.getBook();
    },
    methods:{
        getBook(){
            this.$store.state.weapons.forEach((book)=>{
                if (book.id === Number(this.$route.params.book)) {
                    this.book = book
                }
            })
        }
    }
}
</script>
<style scoped></style>
