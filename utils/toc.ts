import { last, cloneDeep } from 'lodash-es'

/**************************************************************************
 * 根据摊平的目录节点构建 toc 树
 */
export type TOCListItem = {
  depth: number
  children: {
    value: string
  }[]
}
export type TOCNode = {
  depth: number
  text: string
  children: TOCNode[]
}
export const crateTOCTree = (list: TOCListItem[], dep?: number) => {
  let _list = cloneDeep<TOCListItem[]>(list)
  if (dep) {
    _list = _list.filter(i => i.depth <= dep)
  }
  const toc: TOCNode[] = []
  const stack = []
  for (let i = 0; i < _list.length; i++) {
    const node: TOCNode = {
      depth: _list[i].depth,
      text: _list[i].children[0].value,
      children: [],
    }
    while (true) {
      if (!stack.length) {
        stack.push(node)
        toc.push(node)
        break
      }
      const p = last(stack)
      if (p.depth < node.depth) {
        p.children.push(node)
        stack.push(node)
        break
      }
      if (p.depth === node.depth || p.depth > node.depth) {
        stack.pop()
        continue
      }
    }
  }
  return toc
}
