<script lang="ts">
  import logo from '$lib/images/MC-Logo-2020-FC_CMYK.png';
</script>

<div class="navbar bg-base-100 md:px-8">
    <div class="flex-1">
      <a href="/"><img src={logo} alt="Morningtide Logo" class="max-h-16 md:max-h-24 min-w-24 object-contain"></a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 hidden md:flex">
        <li class="text-primary"><a href="/insights">Insights</a></li>
        <li>
            <details>
              <summary class="text-primary">
                Services
              </summary>
              <ul class="p-2 bg-base-100 rounded-t-none">
                <li><a href="/">Link 1</a></li>
                <li><a href="/">Link 2</a></li>
              </ul>
            </details>
          </li>
        <li class="text-primary"><a href="/">About</a></li>
        <li class="text-primary"><a href="https://courses.morningtide.com.au/">Courses</a></li>
        <li>
        </li>
      </ul>
      <button class="btn btn-square btn-ghost block md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
  </div>