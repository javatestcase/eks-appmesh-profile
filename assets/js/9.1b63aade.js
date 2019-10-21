(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{208:function(e,s,t){"use strict";t.r(s);var a=t(0),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"app-mesh-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-mesh-profile","aria-hidden":"true"}},[e._v("#")]),e._v(" App Mesh Profile")]),e._v(" "),t("p",[e._v("The App Mesh integration with EKS is made out of the following components:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Kubernetes custom resources")]),e._v(" -\nmesh, virtual nodes and virtual services")]),e._v(" "),t("li",[t("strong",[e._v("CRD controller")]),e._v(" -\nkeeps the custom resources in sync with the App Mesh control plane")]),e._v(" "),t("li",[t("strong",[e._v("Admission controller")]),e._v(" -\ninjects the Envoy sidecar and assigns pods to App Mesh virtual nodes")]),e._v(" "),t("li",[t("strong",[e._v("Telemetry service")]),e._v(" -\nPrometheus instance that collects and stores Envoy's metrics")]),e._v(" "),t("li",[t("strong",[e._v("Progressive delivery operator")]),e._v(" -\nFlagger instance that automates canary releases on top of App Mesh")])]),e._v(" "),t("p",[e._v("To install these components you'll be using the eksctl "),t("a",{attrs:{href:"https://github.com/weaveworks/eks-appmesh-profile",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Mesh profile"),t("OutboundLink")],1),e._v(".\nWith eksctl profiles you can launch a fully-configured managed Kubernetes cluster with EKS and\neasily add the software required to run your production applications.\nWhen you make changes to the configuration within git, these changes are reflected on your cluster.")]),e._v(" "),t("h2",{attrs:{id:"create-an-eks-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-eks-cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" Create an EKS cluster")]),e._v(" "),t("p",[e._v("Create an EKS cluster named "),t("code",[e._v("appmesh")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v(" EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" eksctl create cluster -f -\napiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\nmetadata:\n  name: appmesh\n  region: eu-west-2\nnodeGroups:\n  - name: default\n    instanceType: m5.large\n    desiredCapacity: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n    volumeSize: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("120")]),e._v("\n    iam:\n      withAddonPolicies:\n        appMesh: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n        xRay: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\nEOF\n")])])]),t("p",[e._v("The above command will create a two nodes cluster with App Mesh IAM policy attached to the EKS node instance role.")]),e._v(" "),t("h2",{attrs:{id:"create-a-github-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-github-repository","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a GitHub repository")]),e._v(" "),t("p",[e._v("Create a GitHub repository and clone it locally\n(replace the "),t("code",[e._v("GHUSER")]),e._v(" value with your GitHub username):")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GHUSER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("username\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${GHUSER}")]),e._v("/appmesh-dev\n")])])]),t("p",[e._v("Set your GitHub username and email:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" appmesh-dev\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${GHUSER}")]),e._v('"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" config user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"your@main.address"')]),e._v("\n")])])]),t("h2",{attrs:{id:"install-app-mesh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-app-mesh","aria-hidden":"true"}},[e._v("#")]),e._v(" Install App Mesh")]),e._v(" "),t("p",[e._v("Run the eksctl profile command (replace "),t("code",[e._v("GHUSER")]),e._v(" with your GitHub username):")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GHUSER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("username\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EKSCTL_EXPERIMENTAL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n\neksctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" profile appmesh "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--revision"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("demo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--cluster"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("appmesh "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--region"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("eu-west-2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--git-url"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("git@github.com:"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${GHUSER}")]),e._v("/appmesh-dev "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--git-user"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("fluxcd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n--git-email"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${GHUSER}")]),e._v("@users.noreply.github.com\n")])])]),t("p",[e._v("The command "),t("code",[e._v("eksctl enable profile")]),e._v(" takes an existing EKS cluster and an empty repository\nand sets up a GitOps pipeline for the App Mesh control plane.")]),e._v(" "),t("p",[e._v("After the command finishes installing "),t("a",{attrs:{href:"https://github.com/fluxcd/flux",target:"_blank",rel:"noopener noreferrer"}},[e._v("FluxCD"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://github.com/fluxcd/flux",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm Operator"),t("OutboundLink")],1),e._v(",\nyou will be asked to add Flux's SSH public key to your GitHub repository.")]),e._v(" "),t("p",[e._v("Copy the public key and create a deploy key with write access on your GitHub repository.\nGo to "),t("code",[e._v("Settings > Deploy keys")]),e._v(" click on "),t("code",[e._v("Add deploy key")]),e._v(", check "),t("code",[e._v("Allow write access")]),e._v(",\npaste the Flux public key and click "),t("code",[e._v("Add key")]),e._v(".")]),e._v(" "),t("p",[e._v("Once that is done, Flux will pick up the changes in the repository and deploy them to the cluster.")]),e._v(" "),t("p",[e._v("List the installed components:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ watch kubectl get helmreleases --all-namespaces\n\nNAMESPACE        NAME                 RELEASE              STATUS     MESSAGE                  AGE\nappmesh-system   appmesh-controller   appmesh-controller   DEPLOYED   helm install succeeded   1m\nappmesh-system   appmesh-inject       appmesh-inject       DEPLOYED   helm install succeeded   1m\nappmesh-system   appmesh-prometheus   appmesh-prometheus   DEPLOYED   helm install succeeded   1m\nappmesh-system   flagger              flagger              DEPLOYED   helm install succeeded   1m\nkube-system      metrics-server       metrics-server       DEPLOYED   helm install succeeded   1m\n")])])]),t("p",[e._v("Verify that the mesh has been created and it's active:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ kubectl describe mesh\n\nName:         appmesh\nAPI Version:  appmesh.k8s.aws/v1beta1\nKind:         Mesh\nSpec:\n  Service Discovery Type:  dns\nStatus:\n  Mesh Condition:\n    Status: True\n    Type:   MeshActive\n")])])]),t("h2",{attrs:{id:"kustomize-the-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kustomize-the-profile","aria-hidden":"true"}},[e._v("#")]),e._v(" Kustomize the profile")]),e._v(" "),t("p",[e._v("Sync your local repository:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" pull origin master\n")])])]),t("p",[e._v("Create kustomization files for "),t("code",[e._v("base")]),e._v(" and "),t("code",[e._v("flux")]),e._v(" manifests:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" base "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" kustomize create --autodetect --recursive "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" flux "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" kustomize create --autodetect --recursive "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\n")])])]),t("p",[e._v("Create a kustomization file in the repo root:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" kustomization.yaml\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nbases:\n  - base\n  - flux\nEOF\n")])])]),t("p",[e._v("Create "),t("code",[e._v(".flux.yaml")]),e._v(" file in the repo root:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" .flux.yaml\nversion: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\ncommandUpdated:\n  generators:\n    - command: kustomize build "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\nEOF\n")])])]),t("p",[e._v("Verify the kustomization by running a dry run apply:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("kubectl apply --dry-run -k "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),t("p",[e._v("Apply changes:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" -A "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"init kustomization"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin master "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\nfluxctl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sync")]),e._v(" --k8s-fwd-ns flux\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);