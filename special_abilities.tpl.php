<?php

/**
 * @file
 * Default theme implementation to display a block.
 *
 * Available variables:
 * - $block->subject: Block title.
 * - $content: Block content.
 * - $block->module: Module that generated the block.
 * - $block->delta: An ID for the block, unique within each module.
 * - $block->region: The block region embedding the current block.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - block: The current template type, i.e., "theming hook".
 *   - block-[module]: The module generating the block. For example, the user
 *     module is responsible for handling the default user navigation block. In
 *     that case the class would be 'block-user'.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Helper variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $block_zebra: Outputs 'odd' and 'even' dependent on each block region.
 * - $zebra: Same output as $block_zebra but independent of any block region.
 * - $block_id: Counter dependent on each block region.
 * - $id: Same output as $block_id but independent of any block region.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 * - $block_html_id: A valid HTML ID and guaranteed unique.
 *
 * @see template_preprocess()
 * @see template_preprocess_block()
 * @see template_process()
 *
 * @ingroup themeable
 */
?>


<div class="special-abilities">
  <div class="property font-size">
    <span class="title"><?php print t('Font size') . ':';?></span>
    <span data-size="1" class="btn size-1">A</span>
    <span data-size="2" class="btn size-2">A</span>
    <span data-size="3" class="btn size-3">A</span>
  </div>
  <div class="property color-scheme">
    <span class="title"><?php print t('Color scheme') . ':';?></span>
    <span data-color="1" class="btn color-1"></span>
    <span data-color="2" class="btn color-2"></span>
    <span data-color="3" class="btn color-3"></span>
  </div>
  <!--div class="property image-visibility">
    <span class="title"><?php print t('Images') . ':';?></span>
    <span class="img-visible"><?php print t('Yes');?></span>   
    <span class="img-hide"><?php print t('No');?></span>   
  </div-->
  <?php print l(theme('pictogram', array('icon' => 'eye')) . t('Standard web site version'), '#', array('external' => TRUE, 'html' => TRUE, 'attributes' => array('class' => 'special-abilities-link-off'),)); ?>
</div>
<?php print l(theme('pictogram', array('icon' => 'eye')) . t('Version for the visually impaired'), '#', array('external' => TRUE, 'html' => TRUE, 'attributes' => array('class' => 'special-abilities-link-on'),)); ?>



