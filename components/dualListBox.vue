<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
    availableOptions: {
        type: Array,
        default: () => [],
    },
    selectedOptions: {
        type: Array,
        default: () => [],
    },
    availableTitle: {
        type: String,
        default: 'All values',
    },
    selectedTitle: {
        type: String,
        default: 'Selected Values',
    },
    label: {
        type:String,
        default: 'name'
    },
});

const availableSearchText = ref('');
const selectedSearchText = ref('');

const filteredAvailableOptions = computed(() => {
    if (availableSearchText.value.trim() === '') {
        return props.availableOptions;
    }
    const searchTerm = availableSearchText.value.trim().toLowerCase();
    return props.availableOptions.filter((option) =>
        option[props.label].toLowerCase().includes(searchTerm)
    );
});

const filteredSelectedOptions = computed(() => {
    if (selectedSearchText.value.trim() === '') {
        return props.selectedOptions;
    }
    const searchTerm = selectedSearchText.value.trim().toLowerCase();
    return props.selectedOptions.filter((option) =>
        option[props.label].toLowerCase().includes(searchTerm)
    );
});

function moveOption(option, destination) {
    if (destination === 'selected') {
        const index = props.availableOptions.findIndex((opt) => opt.id === option.id);
        if (index !== -1) {
            props.availableOptions.splice(index, 1);
            props.selectedOptions.push(option);
        }
    } else if (destination === 'available') {
        const index = props.selectedOptions.findIndex((opt) => opt.id === option.id);
        if (index !== -1) {
            props.selectedOptions.splice(index, 1);
            props.availableOptions.push(option);
        }
    }
}

function moveAllAvailableOptions() {
    props.selectedOptions.push(...props.availableOptions);
    props.availableOptions.splice(0, props.availableOptions.length);
}

function removeAllSelectedOptions() {
    props.availableOptions.push(...props.selectedOptions);
    props.selectedOptions.splice(0, props.selectedOptions.length);
}
</script>

<template>
    <div class="conatiner flex flex-col items-center h-full mb-4">
        <div class="flex w-full gap-4">
            <div class="w-full">
                <div class="w-full mt-10 px-5 py-3 bg-purple-150 rounded-lg mb-5">
                    <p class="text-black-700 font-semibold">{{ availableTitle }}</p>
                </div>
                <div class="mb-4 w-full relative">
                    <input
                        type="text"
                        v-model="availableSearchText"
                        placeholder="Search course"
                        class="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                    />
                    <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div class="border border-gray-300 h-60 rounded-lg overflow-x-auto">
                    <ul>
                        <li
                            v-for="option in filteredAvailableOptions"
                            :key="option.id"
                            @click="moveOption(option, 'selected')"
                            class="text-sm cursor-pointer py-1 px-3 hover:bg-gray-200"
                        >
                            {{ option[label] || option.name }}
                        </li>
                        <li v-if="filteredAvailableOptions.length === 0" class="py-1 px-3 rounded text-sm">
                            No results found
                        </li>
                    </ul>
                </div>
                <div class="mt-4 flex justify-end mt-1">
                    <button type="button" class="text-primary font-semibold opacity-75" @click="moveAllAvailableOptions">
                        <span>Select all</span>
                        <i class="fas fa-angle-double-right ml-2"></i>
                    </button>
                </div>
            </div>
            <div class="w-full ml-3">
                <div class="w-full mt-10 px-5 py-3 bg-purple-150 rounded-lg mb-5">
                    <p class="text-black-700 font-semibold">{{ selectedTitle }}</p>
                </div>
                <div class="mb-4 w-full relative">
                    <input
                        type="text"
                        v-model="selectedSearchText"
                        placeholder="Search course"
                        class="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                    />
                    <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                </div>
                <div class="border border-gray-300 h-60 rounded-lg overflow-x-auto">
                    <ul>
                        <li
                            v-for="option in filteredSelectedOptions"
                            :key="option.id"
                            @click="moveOption(option, 'available')"
                            class="cursor-pointer py-1 px-3 hover:bg-gray-200 text-sm"
                        >
                            {{ option[label] || option.name }}
                        </li>
                        <li v-if="filteredSelectedOptions.length === 0" class="py-1 px-3 rounded text-sm">
                            No results found
                        </li>
                    </ul>
                </div>
                <div class="mt-4 mt-1">
                    <button type="button" class="text-primary font-semibold opacity-75" @click="removeAllSelectedOptions">
                        <i class="fas fa-angle-double-left mr-2"></i>
                        <span>Remove all</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

