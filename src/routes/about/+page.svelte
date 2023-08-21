<script lang="ts">
  import * as config from "$lib/config";
</script>

<nav>
  <a href="/" class="title">
    <b>{config.title}</b>
  </a>
</nav>
<h1><i>California, USA</i></h1>
<p>
  Digging holes, planting seeds, and watering so others may view our garden in a
  perpetual state of awe.
</p>

<style>
  h1 {
    font-size: 25px;
  }

  a {
    font-size: 100px;
    color: inherit;
  }

  a:hover {
    text-decoration: none; /*needs this or else an underline shows*/
    color: white;
    text-shadow: rgb(58, 161, 130) 0px 0px 10px;
  }

  p {
    font-size: 20px;
    white-space: nowrap;
    word-break: normal;
    display: flex;
  }
</style>
