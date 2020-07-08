# @eddienko/jupyterlab-colabinspired-theme-light

A JupyterLab theme extension inspired in Colab. The theme adds a drop shadow to the active cell.

![Cell Screenshot](screenshot.png)


## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @eddienko/jupyterlab-colabinspired-theme-light
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
