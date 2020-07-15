jQuery(document).ready(function(){

	var current_yyyymm_ = moment().format("YYYYMM");

	$("#pb-calendar").pb_calendar({
		schedule_list : function(callback_, yyyymm_){
			var temp_schedule_list_ = {};

			temp_schedule_list_[current_yyyymm_+"01"] = [
				{'ID' : 1, style : "green"}
			];

			temp_schedule_list_[current_yyyymm_+"02"] = [
				{'ID' : 1, style : "green"}
			];

			temp_schedule_list_[current_yyyymm_+"03"] = [
				{'ID' : 1, style : "green"}
			];

			temp_schedule_list_[current_yyyymm_+"04"] = [
				{'ID' : 1, style : "green"}
			];

			temp_schedule_list_[current_yyyymm_+"05"] = [
				{'ID' : 1, style : "green"}
			];


			temp_schedule_list_[current_yyyymm_+"06"] = [
				{'ID' : 1, style : "green"}
			];

			temp_schedule_list_[current_yyyymm_+"07"] = [
				{'ID' : 1, style : "green"}
			];

			temp_schedule_list_[current_yyyymm_+"08"] = [
				{'ID' : 1, style : "green"}
			];

			temp_schedule_list_[current_yyyymm_+"09"] = [
				{'ID' : 1, style : "green"}
			];

			temp_schedule_list_[current_yyyymm_+"10"] = [
				{'ID' : 2, style : "red"},
				{'ID' : 3, style : "blue"},
			];

			temp_schedule_list_[current_yyyymm_+"11"] = [
				{'ID' : 2, style : "red"},
				{'ID' : 3, style : "blue"},
			];

			temp_schedule_list_[current_yyyymm_+"12"] = [
				{'ID' : 2, style : "red"},
				{'ID' : 3, style : "blue"},
			];

			temp_schedule_list_[current_yyyymm_+"13"] = [
				{'ID' : 3, style : "blue"}
			];

			temp_schedule_list_[current_yyyymm_+"20"] = [
				{'ID' : 3, style : "blue"}
			];

			temp_schedule_list_[current_yyyymm_+"26"] = [
				{'ID' : 2, style : "red"},
				{'ID' : 3, style : "blue"},
			];

			temp_schedule_list_[current_yyyymm_+"27"] = [
				{'ID' : 2, style : "red"},
				{'ID' : 3, style : "blue"},
			];

			temp_schedule_list_[current_yyyymm_+"28"] = [
				{'ID' : 2, style : "red"},
				{'ID' : 3, style : "blue"},
			];

			temp_schedule_list_[current_yyyymm_+"29"] = [
				{'ID' : 2, style : "red"},
				{'ID' : 3, style : "blue"},
			];

			temp_schedule_list_[current_yyyymm_+"30"] = [
				{'ID' : 3, style : "blue"}
			];


			callback_(temp_schedule_list_);
		},
		schedule_dot_item_render : function(dot_item_el_, schedule_data_){
			dot_item_el_.addClass(schedule_data_['style'], true);
			return dot_item_el_;
		}
	});
});
