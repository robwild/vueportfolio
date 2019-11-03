<template>
    <div class="career">

        <vue-headful
                title="Career history - Rob Wild | 8Manj Technologies Ltd online portfolio & CV"
                description="Description from vue-headful"
                keywords="some keywords here"
        />

        <h1>
            Career page
        </h1>

        <div>
            <b-carousel
                    id="carousel-no-animation"
                    style=""
                    fade
                    indicators
                    controls
                    img-width="4096"
                    img-height="2304"
                    :interval="0"
            >
                <b-carousel-slide
                        caption="First slide"
                        img-src="https://picsum.photos/4096/2304/?image=10"
                        text-html="Curabitur faucibus metus enim, non viverra urna convallis eu. Integer ullamcorper risus quis neque pellentesque, ac egestas sem viverra. Curabitur tempus, nisi vel consequat mollis, enim nulla posuere nunc, in aliquam velit tortor nec est. Etiam in sapien id urna sagittis consectetur id eget sapien. Quisque faucibus risus nec pharetra tristique. Nullam auctor bibendum enim nec cursus. Aenean dictum sapien eget eros efficitur egestas. Mauris luctus tellus odio. Duis sed dui a purus aliquam luctus ut eu justo. Etiam sed urna dui. Cras volutpat, nisi in sollicitudin accumsan, felis quam feugiat nibh, quis dignissim dolor dui tempor urna."
                ></b-carousel-slide>
                <b-carousel-slide
                        caption="Second Slide"
                        img-src="https://picsum.photos/4096/2304/?image=12"
                ></b-carousel-slide>
                <b-carousel-slide
                        caption="Third Slide"
                        img-src="https://picsum.photos/4096/2304/?image=22"
                ></b-carousel-slide>
                <b-carousel-slide
                        caption="Fourth Slide"
                        img-src="https://picsum.photos/1024/480/?image=23"
                ></b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Career"
    }
</script>

<style scoped>


</style>