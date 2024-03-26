<script lang="ts">
  import logo from '$lib/images/MC-Logo-2020-FC_CMYK.png';
</script>

<div class="navbar bg-base-100 px-8">
    <div class="flex-1">
      <a href="/"><img src={logo} alt="Morningtide Logo" class="h-24"></a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
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
        <li class="text-primary"><a href="/">Courses</a></li>
      </ul>
    </div>
  </div>