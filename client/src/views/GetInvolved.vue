<template>
  <div id="getInvolved">
    <div class="row mb-3">
      <div class="col-10 col-md-8 mx-auto">
        <img
          src="@/assets/window.jpg"
          alt="Light shines through a window onto some artfully placed flowers."
        >
      </div>
    </div>
    <info-box title="Donate">
      <p class="mt-4">
        <a
          :href="links.donate"
          target="_blank"
          class="btn btn-outline-gray-dark"
        >
          Contribute to our GoFundMe
        </a>
      </p>
    </info-box>
    <info-box title="Join Our Newsletter">
      <b-form class="pt-4" @submit="doPost">
        <b-form-group
          label="email"
          label-for="formEmail"
          label-cols="3"
          label-align="right"
          content-cols="7"
        >
          <b-form-input
            id="formEmail"
            v-model="form.MERGE0"
            required
          />
        </b-form-group>
        <b-form-group
          label="first name"
          label-for="formFname"
          label-cols="3"
          label-align="right"
          content-cols="7"
        >
          <b-form-input
            id="formFname"
            v-model="form.MERGE1"
          />
        </b-form-group>
        <b-form-group
          label="last name"
          label-for="formLname"
          label-cols="3"
          label-align="right"
          content-cols="7"
        >
          <b-form-input
            id="formLname"
            v-model="form.MERGE2"
          />
        </b-form-group>
        <b-form-group
          label="pronouns"
          label-for="formPronouns"
          label-cols="3"
          label-align="right"
          content-cols="7"
        >
          <b-form-input
            id="formPronouns"
            v-model="form.MERGE3"
          />
        </b-form-group>
        <b-form-group
          v-slot="{ ariaDescribedby }"
          label="mailing lists"
          label-cols="3"
          label-align="right"
          content-cols="7"
        >
          <div class="pt-2">
            <b-form-checkbox
              v-model="form['group[5233][1]']"
              :aria-describedby="ariaDescribedby"
              inline
            >
              General updates
            </b-form-checkbox>
            <b-form-checkbox
              v-model="form['group[5233][2]']"
              :aria-describedby="ariaDescribedby"
              inline
            >
              Volunteer opportunities
            </b-form-checkbox>
          </div>
        </b-form-group>
        <b-button type="submit" class="btn-gray-dark mt-3">
          Sign Up
        </b-button>
      </b-form>
    </info-box>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import axios from 'axios';
import {
  BButton,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
} from 'bootstrap-vue';
import InfoBox from '@/components/InfoBox.vue';

export default {
  name: 'GetInvolved',
  components: {
    BButton,
    BForm,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
    InfoBox
  },
  data() {
    return {
      form: {
        // blame mailchimp for this ludicrous naming scheme
        MERGE0: '', // email
        MERGE1: '', // first name
        MERGE2: '', // last name
        MERGE3: '', // pronouns
        'group[5233][1]': true, // receive general updates?
        'group[5233][2]': true // receive volunteering updates?
      }
    };
  },
  computed: {
    ...mapState('meta', ['links'])
  },
  methods: {
    async doPost(event) {
      event.preventDefault();
      console.log(this.form);
      // TODO: test against real mailchimp
      // const response = await axios.post(
      //   this.links.mailingList,
      //   this.form
      // );
    }
  }
};
</script>

<style lang="scss" scoped>
// TODO: style inputs
img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
