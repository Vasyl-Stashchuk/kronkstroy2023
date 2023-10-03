import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        // Ініціалізуємо початкові значення змінних для зберігання даних про типи, бренди та пристрої.
        this._types = []             // Масив типів пристроїв.
        this._brands = []            // Масив брендів пристроїв.
        this._devices = []           // Масив пристроїв.
        this._selectedType = {}      // Обраний тип пристрою.
        this._selectedBrand = {}     // Обраний бренд пристрою.
        this._page = 1               // Номер поточної сторінки списку пристроїв.
        this._totalCount = 0         // Загальна кількість пристроїв.
        this._limit = 8              // Кількість пристроїв на одній сторінці.

        makeAutoObservable(this)     // Робимо всі поля спостережуваними за допомогою MobX.
    }

    // Методи для встановлення значень полів.

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)                // При зміні типу, переключаємося на першу сторінку.
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this.setPage(1)                // При зміні бренду, переключаємося на першу сторінку.
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    // Геттери для доступу до даних.

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}
