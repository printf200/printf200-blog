---
title: Redis之初入师门
author: Printf200
date: 2023/07/12 00:52
---

# Redis之初入师门

## 1 Redis师门简介

Redis是一个开源(BSD许可)的`内存数据结构存储`，用作`数据库、缓存、消息代理和流引擎`。Redis提供的数据结构有`字符串（strings）`，`哈希（hashes）`，`列表（lists）`，`集合（sets）`，`带有范围查询的排序集合（sorted sets）`，`位图（bitmap）`，`超级日志（hyperloglogs）`，`地理空间索引（geospatial indexes）`和`流（streams）`。Redis具有内置了`复制`、`Lua脚本`、`LRU驱逐`、`事务和不同级别的磁盘持久化`。并通过`Redis Sentinel（哨兵模式）`和`Redis Cluster（集群模式）`自动分区提供`高可用性`。

Redis并且对这些类型运行`原子操作`，例如给一个字符串追加值，在哈希表的一个值上增加，在列表上追加值，计算集合的交、并、差;或者得到排序集合中排名最高的元素。

为了达到最佳性能，Redis使用内存中的数据集。可以根据不同的使用场景，可以将操作的命令数据持久化到磁盘中，同时也可以禁止使用持久化。

Redis支持异步复制，具有快速的非阻塞同步和自动重连接以及网络拆分上的部分重新同步。

Redis还包括：

- 事务管理
- 发布订阅
- Lua脚本
- 存在时间限制的键
- LRU驱逐键
- 自动故障转移

Redis采用ANSI C编写，适用于大多数POSIX系统，如Linux、*BSD和MacOS X，无需外部依赖。Linux和OS X是Redis开发和测试最多的两个操作系统，建议使用Linux进行部署。

## 2 技能介绍

- 内存存储和持久化（磁盘存储）

- 键值对存储，支持简单字符串，哈希，集合，列表，有序集合等多种数据结构

- 分布式缓存，可集合MySQL使用

- 分布式锁

- 支持高可用（单机、主从、哨兵、集群）

  🌟==更多技能请解锁后续秘籍==

## 3 为什么加入Redis师门？

- 性能极高-Redis单线程执行最高读写性能100000/s
- 数据结构丰富，不仅支持简单的key-value类型，同时也提供了list、set、hash、zset等数据结构
- 支持数据持久化，保证数据的安全性，重启不会丢失数据
- 支持数据备份，即master-slave模式的数据备份
- 提供高可用部署方案

## 4 怎么加入Redis师门？

- 官网

  - 英文：https://redis.io/

    ![image-20230704170354138](https://p.ipic.vip/6eq14w.png)

  - 中文：http://www.redis.cn/

    ![image-20230704170717773](https://p.ipic.vip/2vrty2.png)

  - 

- 下载
  - https://redis.io/download/

![image-20230704184125453](https://p.ipic.vip/77kgqg.png)

- 其他文档
  - 源码 https://github.com/redis/redis
  - 在线测试 https://try.redis.io/