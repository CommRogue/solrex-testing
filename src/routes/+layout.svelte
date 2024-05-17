<script>
	import '../app.css';
</script>
<div class="mt-2 lt-2">
	<slot></slot>
</div>
<div
	class="fixed right-0 top-0 h-screen w-[var(--right-nav-width)] lm-0 flex flex-col bg-primary"
></div>

<div
	class="fixed bottom-0 pl-[var(--circle-nav-width)] w-[calc(100vw-var(--circle-nav-radius)-var(--right-nav-width))] left-[var(--circle-nav-radius)] h-[var(--bottom-nav-width)] flex flex-row bg-primary"
></div>
<div
	class="fixed bottom-0 aspect-square border-r-[calc(var(--circle-nav-width))] w-[calc(var(--circle-nav-radius)+var(--circle-nav-width))] border-t-[calc(var(--circle-nav-width))] border-primary"
	style="border-radius: 0 100% 0 0"
></div>

<div
	class="edge-corner before:bg-primary absolute block w-[calc(var(--navbar-edge-radius)*2)] h-[calc(var(--navbar-edge-radius)*2)] top-[calc(100vh-var(--bottom-nav-width)-(var(--navbar-edge-radius)*2))] left-[calc(100vw-var(--right-nav-width)-(var(--navbar-edge-radius)*2))]"
></div>
<div>
	<svg
		viewBox="0 0 110 110"
		xmlns="http://www.w3.org/2000/svg"
		class="fixed h-[calc(var(--circle-nav-radius)-var(--circle-nav-width)*2.5)] filter text-primary bottom-0 ml-2 mb-2"
		id="logo-gear"
	>
		<use xlink:href="/logo/logo-gear.svg#logo-gear" href="/logo/logo-gear.svg#logo-gear"></use>
	</svg>
	<svg
		viewBox="0 0 110 110"
		xmlns="http://www.w3.org/2000/svg"
		class="fixed h-[calc(var(--circle-nav-radius)-var(--circle-nav-width)*4.82)] filter text-primary bottom-0 ml-9 mb-9"
		id="logo-solr"
	>
		<use xlink:href="/logo/logo-solr.svg#logo-solr" href="/logo/logo-solr.svg#logo-solr"></use>
	</svg>
</div>
