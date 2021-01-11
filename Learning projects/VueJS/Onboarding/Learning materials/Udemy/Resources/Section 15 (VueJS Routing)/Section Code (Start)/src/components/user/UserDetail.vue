<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button"
                     class="btn btn-success"
                     :to="{name: 'userEdit', params: { id: $route.params.id }, query: {locale: 'en', q: 100} }">Edit User</router-link>  <!-- the name userEdit is taken from the routes.js-->
    </div>
</template>