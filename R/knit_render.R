function(input, ...) {
  project_root <- normalizePath(here::here())
  input_dir <- normalizePath(dirname(input))
  
  rmarkdown::render(
    input,
    knit_root_dir = project_root,
    output_options = list(
      self_contained = FALSE,
      lib_dir = "content_lib"
    )
  )
}