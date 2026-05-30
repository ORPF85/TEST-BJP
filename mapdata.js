var simplemaps_countrymap_mapdata={
  main_settings: {
    width: "responsive",
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "Click to view party data & stats",
    state_color: "#0a294a",
    state_hover_color: "#ffcc00",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    location_description: "National Capital",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    label_color: "#ffffff",
    label_hover_color: "#001a33",
    label_size: 12,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
    zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect"
  },
  state_specific: {
    INAN: { name: "Andaman and Nicobar" },
    INAP: { name: "Andhra Pradesh", color: "#fff59d" },
    INAR: { name: "Arunachal Pradesh", color: "#f3a661" },
    INAS: { name: "Assam", color: "#f3a661" },
    INBR: { name: "Bihar", color: "#ffe082" },
    INCH: { name: "Chandigarh" },
    INCT: { name: "Chhattisgarh", color: "#f3a661" },
    INDH: { name: "Dādra and Nagar Haveli and Damān and Diu" },
    INDL: { name: "Delhi" },
    INGA: { name: "Goa", color: "#f3a661" },
    INGJ: { name: "Gujarat", color: "#f3a661" },
    INHP: { name: "Himachal Pradesh", color: "#ce93d8" },
    INHR: { name: "Haryana", color: "#f3a661" },
    INJH: { name: "Jharkhand", color: "#b2dfdb" },
    INJK: { name: "Jammu and Kashmir", color: "#80deea" },
    INKA: { name: "Karnataka", color: "#ce93d8" },
    INKL: { name: "Kerala", color: "#ffab91" },
    INLA: { name: "Ladakh" },
    INLD: { name: "Lakshadweep" },
    INMH: { name: "Maharashtra", color: "#90caf9" },
    INML: { name: "Meghalaya", color: "#bcaaa4" },
    INMN: { name: "Manipur", color: "#f3a661" },
    INMP: { name: "Madhya Pradesh", color: "#f3a661" },
    INMZ: { name: "Mizoram", color: "#d1c4e9" },
    INNL: { name: "Nagaland", color: "#ffcc80" },
    INOR: { name: "Orissa", color: "#b0bec5" },
    INPB: { name: "Punjab", color: "#cfd8dc" },
    INPY: { name: "Puducherry" },
    INRJ: { name: "Rajasthan", color: "#f3a661" },
    INSK: { name: "Sikkim", color: "#e6ee9c" },
    INTG: { name: "Telangana", color: "#ce93d8" },
    INTN: { name: "Tamil Nadu", color: "#ef9a9a" },
    INTR: { name: "Tripura", color: "#f3a661" },
    INUP: { name: "Uttar Pradesh", color: "#ffcc00" },
    INUT: { name: "Uttaranchal", color: "#f3a661" },
    INWB: { name: "West Bengal", color: "#a5d6a7" }
  },
  locations: {
    "0": { name: "New Delhi", lat: "28.6", lng: "77.2" }
  },
  labels: {},
  legend: { entries: [] },
  regions: {}
};

// SimpleMaps Hook Bridge Execution
var simplemaps_countrymap_hooks = {
  ready: function() {
    if (typeof loadState === "function") {
      loadState('UP', document.getElementById('btn-UP'));
    }
  }
};

simplemaps_countrymap.hooks.select_state = function(id){

let cleanId = id.replace('IN','');

if(cleanId === 'TG') cleanId = 'TS';

if(cleanId === 'UT') cleanId = 'UK';

const targetButton = null;

if(typeof loadState === "function"){

loadState(cleanId,targetButton);

}

if(window.innerWidth <= 1024){

document.getElementById('displayCard')
.scrollIntoView({
behavior:'smooth'
});

}

};
