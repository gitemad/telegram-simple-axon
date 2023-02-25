<template>
  <div class="search-input">
    <input
			type="text"
			:value="value"
			@input="updateValue($event.target.value)"
			placeholder="Search"
		>
		<unicon
			name="search"
			fill="#707579"
			class="search-icon"
		/>
  </div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			required: true
		}
	},
	methods: {
		updateValue(newValue) {
			this.$emit('input', newValue);
		}
	},
}
</script>

<style lang="scss" scoped>
.search-input {
	position: relative;
	display: flex;
	flex: 1;
	input {
		color: $color-text-secondary;
		background-color: $color-chat-hover;
		border: 2px solid $color-chat-hover;
		border-radius: $border-radius-pill;
		height: 2rem;
		width: 100%;
		padding: 0.25rem 1rem 0.25rem 3rem;
		font-size: 1.1rem;
		caret-color: $color-primary;

		&:focus-visible {
				outline: $color-primary auto 1px;
		}
	}
	.search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
	}
}
</style>