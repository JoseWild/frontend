<template>
    <div class="container">
        <div class="container ronded-me">
            <div class="absolute flex item-center insert-y-0 left 0 pl-3 text-gray=400">
                <div style="width: 14px;"> 
                    <slot name="icon"> 
                        <svg 
                            data-v-8dab3068=""
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fal"
                            data-icon="search"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewbox="0 0 512 512">

                        </svg>
                    </slot> 
                
                </div>
                <input type="text" 
                       :value="keyword"
                       :class="inputClassList">
                <button type="button" class="absolute"></button>
            </div>
            <div class="w-64 mx-auto">
                {{ city }}
                <Autocomplete 
                    v-model="city"
                    :options="cities"
                    placeholder="Search cities"
                    @soundSearch="searchCity"
                    @select="onSelect"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
      name: 'Autocomplete',

      props: {
        value: {
            type: 'String',
            default: '',
        }
      },

      data() {
        return {

        };
      },
      computed: {
        inputClassList(){
            retrun [
                'appearance-nome rounded w-full transion duration-150 ease-in-out',
                this.getTextSizeClass,
                this.getTextColorClass,
                this.getBorderColorClass,
                this.getPaddingClass,
            ];
        },
        getTextSizeClass(){
              return 'text-sm leading-5';
        },
        getTextColorClass() {
            return 'text-gray-800 placeholder-gray-400';
        },
        getBorderColorClass(){
            return 'focus:outline-none border border-gray-40 focus:border-blue-400';
        },

      },
      watch:{
        value(value){
            this.keyword = value ;
        },
      },
      created() {
        this.keyword = this.value;
      },

}
</script>