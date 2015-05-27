<!--?php 
function custom_admin_js() {
	$script = '<script type="text/javascript"-->// &lt; ![CDATA['; 	$script .= ' 	jQuery(document).ready( function(){ 		var setBackground = function(){ 			jQuery("select[name=\"wpcf[pagecolor]\"]").css("background-color",  				jQuery("select[name=\"wpcf[pagecolor]\"]").find("option:selected").val() 			)}; 		setBackground(); 		jQuery("select[name=\"wpcf[pagecolor]\"]").find("option").each(function(){ 			jQuery(this).css("background-color", jQuery(this).val()); 		}); 		jQuery("select[name=\"wpcf[pagecolor]\"]").on("change",setBackground); 	}); 	'; 	$script .= ' // ]]&gt;';
	echo $script;
}
add_action('admin_head', 'custom_admin_js');
?&gt;