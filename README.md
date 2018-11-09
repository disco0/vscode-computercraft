# Lua4RC API autocomplete extension
Extension to help the developement of Lua4RC scripts for the Schneider Electric SE8000 series room controllers

## Features

- Autocomplete of Lua classes and globals

  ![autocomplete](images/autocomplete.gif)

- Mouse hover tooltips

  ![tooltips](images/tooltips.gif)


## Todo

#### Features
- Better support for functions that take tables as argument
- Function signature hints (**registerSignatureHelpProvider**)

#### Technical tasks
- Instead of storing inherited properties in the data file, they should maybe get looked up during runtime
- Unit tests

## Acknowledgments
This extension is based on [Simon Vizzini](https://github.com/simonvizzini) extension [vscode-factorio-lua-api-autocomplete](https://github.com/simonvizzini/vscode-factorio-lua-api-autocomplete)