const app = Vue.createApp({
    data() {
        return {
            // objects contracts modal
            activeDisplay: "all",
            contacts: [],
            contact: { name: "", phone: "", email: "" },
            search: "",
        }
    },
    methods: {
        // change display for 3 modal all - search - add
        changeDisplay(display) {
            this.activeDisplay = display;
        },
        // add contracts in add part
        addContact() {
            this.contacts.push(this.contact)
            this.contact = {};
            this.activeDisplay = "all"
            toastr.success(('مخاطب با موفقیت اضافه شد.'), { timeOut: 5000 })
        },
        // delete contracts in delete part
        deleteContact(email){
            if(confirm("آیا از حذف خود اطمینان دارید ؟")){
                this.contacts = this.contacts.filter(f => f.email !== email)
                toastr.error(('مخاطب حذف شد.'), { timeOut: 5000 })
            }
        }
    },
    computed: {
        // get contracts in search part
        getContactsByFilter() {
            if(this.search == "")
                return [];

            return this.contacts.filter(f => f.name.includes(this.search))
        }
    }
})
app.mount("#app")