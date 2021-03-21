<template>
  <!-- Main Div -->
  <div>
    <Alert :msg="msg" v-if="showAlert" />
    <div class="card">
      <div class="columns">
        <div class="column is-one-third"></div>
        <div class="column is-one-third">
          <div class="hero is-medium">
            <div class="hero-body">
              <h1 class="title has-text-centered">Profile</h1>
              <hr class="login-hr" />
              <!-- To center the image -->
              <div class="container has-text-centered">
                <div class="box">
                  <figure class="avatar">
                    <img v-bind:src="profile.image" />
                  </figure>
                </div>
              </div>
              <div class="content">
                <ul>
                  <li
                    v-for="(value, key, id) in profile"
                    :key="id"
                    class="title is-5"
                  >
                    {{ key }} <i class="arrow right"></i> {{ value }}
                  </li>
                  <li>Room id <i class="arrow right"></i> {{ join.roomId }}</li>
                </ul>
              </div>

              <div class="container has-text-centered">
                <div class="buttons are-medium">
                  <button
                    class="button is-primary is-outlined"
                    v-on:click="joinRoomModal = true"
                  >
                    Join Room
                  </button>
                  <button
                    class="button is-success is-outlined"
                    v-on:click="createRoomModal = true"
                  >
                    Create Room
                  </button>
                  <button
                    class="button is-danger is-outlined"
                    v-on:click="deleteRoomModal = true"
                  >
                    Delete Room
                  </button>
                </div>
                <!-- All romm Cards -->
                <!-- <room-card id="tazim" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Start of Create Room Modal -->
    <b-modal v-model="createRoomModal">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Create Room</p>
          <button
            type="button"
            class="delete"
            v-on:click="createRoomModal = false"
          />
        </header>
        <section class="modal-card-body">
          <b-field label="Room Name">
            <b-input
              type="text"
              placeholder="Room Name"
              required
              v-model="create.roomName"
            >
            </b-input>
          </b-field>
          <b-field label="Video Link">
            <b-input
              type="text"
              placeholder="Video Link"
              required
              v-model="create.videoLink"
            >
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button
            label="Create"
            type="is-success"
            outlined
            v-on:click="createRoom"
          ></b-button>
          <b-button
            label="Cancel"
            type="is-danger"
            outlined
            v-on:click="createRoomModal = false"
          ></b-button>
        </footer>
      </div>
    </b-modal>
    <!--  End of Create Room Modal -->

    <!-- Strat of Join Room -->
    <b-modal v-model="joinRoomModal">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Join Room</p>
          <button
            type="button"
            class="delete"
            v-on:click="joinRoomModal = false"
          />
        </header>
        <section class="modal-card-body">
          <b-field label="Room Id">
            <b-input
              type="text"
              placeholder="Room ID"
              required
              v-model="join.roomId"
            >
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button
            label="Join"
            type="is-success"
            outlined
            v-on:click="joinRoom"
          ></b-button>
          <b-button
            label="Cancel"
            type="is-danger"
            outlined
            v-on:click="joinRoomModal = false"
          ></b-button>
        </footer>
      </div>
    </b-modal>
    <!-- End of join room -->
    <!-- Start of delete room modal -->
    <b-modal v-model="deleteRoomModal">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Delete Room</p>
          <button
            type="button"
            class="delete"
            v-on:click="deleteRoomModal = false"
          />
        </header>
        <section class="modal-card-body">
          <b-field label="Room Id">
            <b-input
              type="text"
              placeholder="Room ID"
              required
              v-model="del.roomId"
            >
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button
            label="Delete"
            type="is-success"
            outlined
            v-on:click="deleteRoom"
          ></b-button>
          <b-button
            label="Cancel"
            type="is-danger"
            outlined
            v-on:click="deleteRoomModal = false"
          ></b-button>
        </footer>
      </div>
    </b-modal>
    <!-- End of delete room modal -->
  </div>
  <!-- End of main div -->
</template>

<script>
import axios from "axios";
import Alert from "../Alert.vue";
export default {
  name: "Profile",
  components: {
    Alert,
  },
  data() {
    return {
      createRoomModal: false,
      joinRoomModal: false,
      deleteRoomModal: false,
      showAlert: false,
      create: {
        roomName: "",
        videoLink: "",
      },
      join: {
        roomId: "",
      },
      del: {
        roomId: "",
      },
      profile: {
        username: "",
        email: "",
        gender: "",
        public_id: "",
        message:
          "We dont keep anything secret from user that's why we give every data about you.",
        image: "",
      },

      msg: "",
    };
  },
  methods: {
    createRoom() {
      const URL = "http://127.0.0.1:5000/create";
      axios
        .post(
          URL,
          {
            room_name: this.create.roomName,
            video_link: this.create.videoLink,
          },
          {
            headers: {
              "access-token": localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.join.roomId = res.data.room_id;
            console.log(res.data.room_id);
            this.createRoomModal = false;
            this.showAlert = true;
            this.msg = "Created Room now join to have fun";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    joinRoom() {
      this.$socket.client.emit("join", {
        username: this.profile.username,
        room: this.join.roomId,
      });
      sessionStorage.setItem("username", this.profile.username);
      this.$router.push({ path: `/${this.join.roomId}` });
    },
    deleteRoom() {
      const URL = "http://127.0.0.1:5000/delete";
      axios
        .post(
          URL,
          {
            room_id: this.del.roomId,
          },
          {
            headers: {
              "access-token": localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            this.deleteRoomModal = false;
            this.showAlert = true;
            this.msg = "Delted Room";
            this.$socket.client.emit("admin_deleted");
          } else {
            this.showAlert = true;
            this.msg =
              "Cant deleted the room because you are not the creator of this room";
            this.deleteRoomModal = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    const URL = "http://127.0.0.1:5000/admin";
    axios
      .get(URL, { headers: { "access-token": localStorage.getItem("token") } })
      .then((res) => {
        console.log(res.data.message);
        this.profile.username = res.data.message.username;
        this.profile.email = res.data.message.email;
        this.profile.public_id = res.data.message.public_id;
        this.profile.image = res.data.message.image;
        this.profile.gender = res.data.message.gender;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.login-hr {
  background-color: black;
}
ul {
  list-style-type: square;
  list-style-position: outside;
  list-style-image: none;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
</style>
