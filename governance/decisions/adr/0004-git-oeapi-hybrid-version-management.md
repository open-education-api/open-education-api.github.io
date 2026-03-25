---
title: Version Management Restructuring for the OOAPI Specification
adr: 0004
status: Accepted
date: 2025-12-16
decision-makers:
  - Technical Working Group
consulted:
informed:
  - Community
---

# Version Management Restructuring for the OOAPI Specification

## Status: Accepted

## Context

The OOAPI specification, including its embedded documentation, currently
exists inside a single branch that contains multiple version folders (v1 t/m
v6). This structure was workable in earlier stages of development, but it now
causes several lifecycle and governance problems. Multiple versions of the
specification coexist in the same working tree. As a result, historical
versions are not immutable, changes are difficult to isolate, and it is
impossible to guarantee that a released version corresponds to an exact,
reproducible semantic version. Because versions are represented as folders
instead of tagged commits, there is no strict separation between released and
in-development versions. This makes maintenance risky and complicates
automation, version evolution, and predictable publication routines. A more
robust and predictable structure is required to support long term maintenance,
reproducibility, clarity for implementers, and consistent release governance.

## Considered options

*Option 1:* Keep the existing folder based model

Advantages: simple structure, no migration required.

Disadvantages: historical versions remain mutable, accidental edits are
possible, semantic versioning is not guaranteed.

*Option 2:* Fully branch based versioning without version folders

Advantages: clear isolation of versions, strict immutability through tags.

Disadvantages: GitHub Pages can only publish one branch, limiting
multi-version publication.

*Option 3:* Hybrid model with release branches, tags and a single generic
/source/ folder

Branches and tags define authoritative versions. Each release branch contains
its own specification inside /source/. Documentation is generated from tagged
states. Advantages: immutable releases, predictable structure, safer
maintenance.

Disadvantages: requires migration and workflow updates.

*Option 4:* External hosting for publishing multiple branches

Advantages: flexible publication.

Disadvantages: introduces operational and financial overhead.

## Decision

We adopt Option 3. The OOAPI specification will be restructured so that each
major and minor version lives in its own release branch such as release/6.0
or release/6.1. Tags freeze exact semantic versions such as v6.0.0 or v6.1.0.
The folder named v6 will be replaced with a generic folder /source/. Each
release branch stores its specification inside this folder. Documentation
becomes an artefact generated from tagged specification states. Published
versions are stored in versioned folders based on tags. Existing v1 t/m v5
folders will remain for a short transition period and will be removed in about
two years.

## Consequences

Easier:

* The specification becomes immutable per version through tags.
* Documentation always matches a tagged state of the specification.
* Reduced risk of accidental modification of historical versions.
* Reliable forward merge workflows maintain version evolution.

More difficult:

* Migration requires restructuring and workflow changes.
* Contributors must follow stricter branching and tagging rules.
* Tools must be adapted to work with the new /source/ folder.

Procedures:

* Fixes start on the lowest active branch such as release/6.0.
* Fixes are forward merged to release/6.1 and then to master.
* Each branch produces tags such as v6.0-rc1 or v6.1-rc2
* Documentation builds run on tags and produce versioned output folders.
* Publication pipelines collect documentation into tag based directories.
* Old folders v1 t/m v5 will be removed after about two years.

## Appendix A: Version management diagram

Version workflow diagram:

master
  |
  +-- release/7.0
  |
  +-- release/6.1
  |      tags: v6.1, v6.1-rc1, v6.1-rc2
  |
  +-- release/6.0
         tags: v6.0, v6.0-rc1

All branches contain a folder named /source/. All documentation is generated
from tags.
