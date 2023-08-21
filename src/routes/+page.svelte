<script lang="ts">
</script>

<section>
  <nav>
    <ul class="links">
      <li><a href="/about">nostrgardn</a></li>
    </ul>
  </nav>
  <div class="image-container">
    <img src="IMG_8530.jpeg" alt="idk" />
    <img src="IMG_8531.jpeg" alt="idk" />
    <img src="IMG_8532.jpeg" alt="idk" />
  </div>
</section>

<style>
  .image-container {
    text-align: left;
  }

  img {
    border: 10px double rgb(95, 195, 154);
    display: inline-block;
    width: 350px;
    margin-right: 10px;
  }

  img:hover {
    border: 5px solid white;
    box-shadow: rgb(95, 195, 154) 0px 0px 10px;
  }

  nav {
    padding-block: var(--size-7);
  }

  .links {
    margin-block: var(--size-7);
  }

  a {
    color: inherit;
    text-decoration: none;
    font-size: 200px;
  }

  a:hover {
    color: white;
    text-shadow: rgb(58, 161, 130) 0px 0px 10px;
  }

  @media (min-width: 768px) {
    nav {
      white-space: nowrap;
      word-break: normal;
      display: flex;
      /* justify-content: space-between; */
    }

    .links {
      display: flex;
      gap: var(--size-3);
      margin-block: 0;
    }
  }
</style>
