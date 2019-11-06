<template>
    <div>

        <b-navbar toggleable="lg" type="dark" variant="white" fixed="top" >
            <b-navbar-brand href="#">

                <img src="./../assets/img/8manj-small.png" alt="logo" />

            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item active><router-link to="/">Home</router-link></b-nav-item>
                    <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
                    <b-nav-item><router-link to="/career">Career</router-link></b-nav-item>
<!--                    <b-nav-item><router-link to="/skills">Skills</router-link></b-nav-item>-->
                    <b-nav-item><router-link to="/portfolio">Portfolio</router-link></b-nav-item>
                    <b-nav-item><router-link to="/brands">Brands</router-link></b-nav-item>
                    <b-nav-item><router-link to="/contact">Contact</router-link></b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>

    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>